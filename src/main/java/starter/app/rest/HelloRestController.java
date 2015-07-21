package starter.app.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class HelloRestController {

    @RequestMapping(value = "/hello", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody String test() {
        return "index";
    }
}
