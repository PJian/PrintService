package com.app.api;

import com.app.dto.OrderDto;
import com.app.dto.PrinterDTO;

import java.util.List;

/**
 * Created by peijia on 12/9/2016.
 */
public interface PrintSvc {
    List<PrinterDTO> getPrinterNames();
    PrinterDTO getDefaultPrintName();
    boolean printReportOrder(OrderDto orderDto);
    boolean printReportOrder(String printerName, OrderDto orderDto);
    boolean printReportLabel(OrderDto orderDto);
    boolean printReportLabel(String printerName,OrderDto orderDto);
}
