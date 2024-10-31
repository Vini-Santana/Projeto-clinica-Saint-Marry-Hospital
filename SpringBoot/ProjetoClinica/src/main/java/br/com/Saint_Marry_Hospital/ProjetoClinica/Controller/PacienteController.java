package br.com.Saint_Marry_Hospital.ProjetoClinica.Controller;

import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Paciente;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Repository.PacienteRepository;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/paciente")
public class PacienteController {

    @Autowired
    private PacienteRepository pacienteRepository;
    private UsuariosRepository usuariosRepository;

    @PostMapping(path="/createPaciente")
    public @ResponseBody Integer createPaciente (@RequestParam String name
            , @RequestParam String email, @RequestParam String senha
            , @RequestParam String cpf) {

//        Usuarios u = new Usuarios();
//        u.setLogin(email);
//        u.setSenha(senha);
//        usuariosRepository.save(u);

        Paciente n = new Paciente();
        n.setNome(name);
        n.setEmail(email);
        n.setCpf(cpf);
        pacienteRepository.save(n);



        return 1;
    }

    @DeleteMapping(path="/deletePaciente")
    public @ResponseBody Integer deletePaciente (@RequestParam Integer id) {
        pacienteRepository.deleteById(id);
        return 1;
    }


}
