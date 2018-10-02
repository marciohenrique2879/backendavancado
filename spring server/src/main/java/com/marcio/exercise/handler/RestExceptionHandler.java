package com.marcio.exercise.handler;

import com.marcio.exercise.error.ErrorDetails;
import com.marcio.exercise.error.ResourceNotFoundException;
import com.marcio.exercise.error.UserAlreadyExistsException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Date;

@ControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> handleResourceNotFoundException(ResourceNotFoundException rnfException){
        ErrorDetails errorDetails = ErrorDetails.Builder.getInstance()
                .timestamp(new Date().getTime())
                .status(HttpStatus.NOT_FOUND.value())
                .title("Resource Not Found")
                .detail(rnfException.getMessage())
                .developerMessage(rnfException.getClass().getName())
                .build();
        return new ResponseEntity<>(errorDetails,HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<?> handleResourceNotFoundException(UserAlreadyExistsException uaeException){
        ErrorDetails errorDetails = ErrorDetails.Builder.getInstance()
                .timestamp(new Date().getTime())
                .status(HttpStatus.NOT_FOUND.value())
                .title("Resource Already Exists")
                .detail(uaeException.getMessage())
                .developerMessage(uaeException.getClass().getName())
                .build();
        return new ResponseEntity<>(errorDetails,HttpStatus.NOT_FOUND);
    }

}
