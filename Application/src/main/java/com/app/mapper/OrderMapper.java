package com.app.mapper;

import com.app.POJO.Order;
import com.app.dto.OrderDto;
import org.mapstruct.Mapper;

/**
 * Created by peijia on 12/14/2016.
 */
@Mapper(componentModel = "spring",uses = {JrBeanCollectionMapper.class})
public interface OrderMapper {
    //OrderMapper orderMapperInstance = Mappers.getMapper(OrderMapper.class);
    Order convertFromDTO(OrderDto orderDto);
    //OrderDto convertToDTO(Order order);
}
