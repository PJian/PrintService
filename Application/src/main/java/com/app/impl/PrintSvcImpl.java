package com.app.impl;

import com.app.POJO.Order;
import com.app.api.PrintSvc;
import com.app.dto.OrderDto;
import com.app.dto.PrinterDTO;
import com.app.mapper.OrderMapper;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.export.JRPrintServiceExporter;
import net.sf.jasperreports.export.*;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.print.PrintService;
import javax.print.PrintServiceLookup;
import java.util.*;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by peijia on 12/9/2016.
 */
@Component
public class PrintSvcImpl implements PrintSvc {

    private static String ORDER_LABEL_REPORT_NAME = "order_label.jasper";

    @Autowired
    private OrderMapper orderMapper;

    private PrintService getPrinter(String printerName) {
        PrintService[] printServices = PrintServiceLookup.lookupPrintServices(null, null);
        List<PrintService> printServiceList = Arrays.asList(printServices).stream().filter(printService -> {
            return printService.getName().equals(printerName);
        }).collect(Collectors.toList());
        return printServiceList != null && printServiceList.size() >= 1 ? printServiceList.get(0) : null;
    }

    public List<PrinterDTO> getPrinterNames() {
        List<PrinterDTO> printerList = new ArrayList<PrinterDTO>();
        PrintService[] printServices = PrintServiceLookup.lookupPrintServices(null, null);
        Arrays.asList(printServices).stream().forEach(printService -> {
            printerList.add(new PrinterDTO(printService.getName()));
        });
        return printerList;
    }

    public PrinterDTO getDefaultPrintName() {
        PrintService defaultPrintService = PrintServiceLookup.lookupDefaultPrintService();
        String name = defaultPrintService == null ? null : defaultPrintService.getName();
        return new PrinterDTO(name);
    }

    public boolean printReportOrder(OrderDto orderDto) {
        return false;
    }

    public boolean printReportOrder(String printerName, OrderDto orderDto) {
        return false;
    }

    public boolean printReportLabel(OrderDto orderDto) {
        JRBeanCollectionDataSource jrBeanCollectionDataSource = new JRBeanCollectionDataSource(Arrays.asList(new Order[]{orderMapper.convertFromDTO(orderDto)}));
        String subPath = getReportFilePath();
        Map<String, Object> parameters = new HashMap<String, Object>();
        parameters.put("SUBREPORT_DIR", subPath);
        try {
            String orderFileName = subPath + ORDER_LABEL_REPORT_NAME;
            JasperPrint jasperPrint = JasperFillManager.fillReport(orderFileName, parameters, jrBeanCollectionDataSource);
            JasperPrintManager.printReport(jasperPrint, false);
            return true;
        } catch (JRException e) {
            e.printStackTrace();
        }
        return false;
    }

    private String getReportFilePath() {
        String path = getClass().getProtectionDomain().getCodeSource().getLocation().getPath();
        return path.substring(0, path.lastIndexOf("/")) + "/report/";
    }

    public boolean printReportLabel(String printerName, OrderDto orderDto) {
        PrintService printService = getPrinter(printerName);
        if (printService == null) return false;
        JRAbstractExporter je = new JRPrintServiceExporter();
        JRBeanCollectionDataSource jrBeanCollectionDataSource = new JRBeanCollectionDataSource(Arrays.asList(new Order[]{orderMapper.convertFromDTO(orderDto)}));
        String subPath = getReportFilePath();
        Map<String, Object> parameters = new HashMap<String, Object>();
        parameters.put("SUBREPORT_DIR", subPath);
        try {
            String orderFileName = subPath + ORDER_LABEL_REPORT_NAME;
            JasperPrint jasperPrint = JasperFillManager.fillReport(orderFileName, parameters, jrBeanCollectionDataSource);
            SimplePrintServiceExporterConfiguration simplePrintServiceExporterConfiguration = new SimplePrintServiceExporterConfiguration();
            simplePrintServiceExporterConfiguration.setPrintService(printService);
            simplePrintServiceExporterConfiguration.setDisplayPageDialog(false);
            je.setExporterInput(new SimpleExporterInput(jasperPrint));
            //设置指定打印机
            je.setConfiguration(simplePrintServiceExporterConfiguration);
            //打印
            je.exportReport();
            return true;
        } catch (JRException e) {
            e.printStackTrace();
        }
        return false;
    }
}
