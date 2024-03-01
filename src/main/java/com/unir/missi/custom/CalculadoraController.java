package com.unir.missi.custom;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CalculadoraController {

    @GetMapping("/calculadora/sumar")
    public Integer sumar(@RequestParam(value = "numero1") Integer num1, @RequestParam(value = "numero2") Integer num2) {
        return num1 + num2;
    }

    @GetMapping("/calculadora/restar")
    public Integer restar(@RequestParam(value = "numero1") Integer num1, @RequestParam(value = "numero2") Integer num2) {
        return num1 - num2;
    }

    @GetMapping("/calculadora/multiplicar")
    public Integer multiplicar(@RequestParam(value = "numero1") Integer num1, @RequestParam(value = "numero2") Integer num2) {
        return num1 * num2;
    }

    @GetMapping("/calculadora/dividir")
    public Integer dividir(@RequestParam(value = "numero1") Integer num1, @RequestParam(value = "numero2") Integer num2)
        throws ArithmeticException {
        if (num2 == 0) throw new ArithmeticException("/ por cero");
        return num1 / num2;
    }

    @GetMapping("/calculadora/fibonacci")
    public Integer fibonacci(@RequestParam(value = "numero") Integer numero) {
        if (numero == 0) {
            return 0;
        } else if (numero == 1) {
            return 1;
        }
        return fibonacci(numero - 1) + fibonacci(numero - 2);
    }
}
