package br.com.Saint_Marry_Hospital.ProjetoClinica.Controller;

import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Paciente;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Usuarios;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/login")
public class UsuariosControler {

    @Autowired
    private UsuariosRepository usuariosRepository;

    @PostMapping(path="/createUsuario")
    public @ResponseBody Integer createPaciente (@RequestParam String senha
            , @RequestParam String login) {

        Usuarios n = new Usuarios();
        n.setSenha(senha);
        n.setLogin(login);
        usuariosRepository.save(n);
        return 1;
    }

    @GetMapping(path="/login")
    public @ResponseBody Iterable<Usuarios> getAllUsers() {
        // This returns a JSON or XML with the users
        return usuariosRepository.findAll();
    }
}
