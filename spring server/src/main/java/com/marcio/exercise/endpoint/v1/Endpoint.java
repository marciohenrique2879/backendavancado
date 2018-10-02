package com.marcio.exercise.endpoint.v1;

import com.marcio.exercise.error.ResourceNotFoundException;
import com.marcio.exercise.model.Task;
import com.marcio.exercise.model.User;
import com.marcio.exercise.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class Endpoint {

    private RestTemplate restTemplate;

    public Endpoint() {
       restTemplate = new RestTemplateBuilder().rootUri("http://localhost:3000").build();
    }


    @Autowired
    UserRepository userRepository;

    @PostMapping("/users")
    public ResponseEntity<?> saveUser(@RequestBody User user){
        return new ResponseEntity<>(userRepository.save(user),HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User userRequest){
        User user = userRepository.findUserByUsername(userRequest.getUsername()).orElseThrow(()-> new ResourceNotFoundException("Nao existe um usuario cadastrado com este email"));
        if(!userRequest.getPassword().equals(user.getPassword())) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    @GetMapping("/tasks/{id}")
    public ResponseEntity<?> listTasks(@PathVariable("id") long userId){
        Task[] taskList = restTemplate.getForObject("/tasks/{_id}", Task[].class,userId);
        return new ResponseEntity<>(taskList, HttpStatus.OK);
    }

    @PostMapping("/tasks")
    public ResponseEntity<?> saveTask(@RequestBody Task task){
        Task response = restTemplate.postForObject("/tasks",task, Task.class);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/tasks/{id}")
    public ResponseEntity<?> saveTask(@PathVariable("id") String id){
        restTemplate.delete("/tasks/{id}",id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
