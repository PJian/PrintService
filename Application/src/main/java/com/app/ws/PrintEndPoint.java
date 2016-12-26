package com.app.ws;

import com.app.api.PrintSvc;
import com.app.dto.OrderDto;
import com.app.dto.PrinterDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/**
 * Created by peijia on 12/9/2016.
 */
@RestController
@RequestMapping("/print")
public class PrintEndPoint {
    @Autowired
    private PrintSvc printService;

    @PostMapping(path = "/{type}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void print(@PathVariable("type") String type,@RequestParam("printer") String printer ,@RequestBody OrderDto orderDto) {
        if (type.equals("order")) {
            printService.printReportOrder(printer,orderDto);
        } else {
            printService.printReportLabel(printer,orderDto);
        }
    }

    @RequestMapping(
            method = RequestMethod.GET,
            path = "/default",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    @ResponseBody
    public PrinterDTO getDefaultPrinter() {
        return printService.getDefaultPrintName();
    }

    @RequestMapping(
            method = RequestMethod.GET,
            path = "/printers",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    @ResponseBody
    public List<PrinterDTO> getPrinters() {
        return printService.getPrinterNames();
    }
}
