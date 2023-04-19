package com.example.evrikatestapp.controller;

import com.sun.jna.platform.win32.Netapi32Util;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class Controller {

    @GetMapping(value = "/{userName}")
    public ResponseEntity get(@PathVariable(name = "userName") String userName) {
        Netapi32Util.User[] users = Netapi32Util.getUsers();
        for(Netapi32Util.User user : users) {
            if (user.name.equalsIgnoreCase(userName)) {
                return ResponseEntity.ok().body(true);
            }
        }
        return ResponseEntity.ok().body(false);
    }
}
