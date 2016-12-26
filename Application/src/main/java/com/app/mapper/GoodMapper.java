package com.app.mapper;

import com.app.POJO.Good;
import com.app.dto.GoodDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

/**
 * Created by peijia on 12/14/2016.
 */
@Mapper(componentModel = "spring")
public interface GoodMapper {
    GoodMapper goodMapperInstance = Mappers.getMapper(GoodMapper.class);
    GoodDto convertToDTO(Good good);
    Good convertFromDTO(GoodDto goodDto);
}
