package com.app.mapper;

import com.app.dto.GoodDto;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by peijia on 12/14/2016.
 */
@Component
public class JrBeanCollectionMapper {
    public JRBeanCollectionDataSource toJrBeanCollectionDataSource(List<GoodDto> goodDtoList){
        return new JRBeanCollectionDataSource(goodDtoList);
    }
}
