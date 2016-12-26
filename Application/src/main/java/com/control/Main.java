package com.control;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * Created by peijia on 12/5/2016.
 */
@SpringBootApplication
@ComponentScan("com.app")
public class Main {
    public static void main(String args[]){
        SpringApplication.run(Main.class, args);
    }
}
