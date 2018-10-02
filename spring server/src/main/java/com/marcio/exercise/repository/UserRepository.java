package com.marcio.exercise.repository;

import com.marcio.exercise.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findUserByUsername(String username);

}
