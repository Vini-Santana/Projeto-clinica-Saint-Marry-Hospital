package br.com.Saint_Marry_Hospital.ProjetoClinica.Controller;

import br.com.Saint_Marry_Hospital.ProjetoClinica.ApiResponse;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Paciente;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.PerfilDeAcesso;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Usuario;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Repository.PacienteRepository;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLIntegrityConstraintViolationException;

@RestController
@RequestMapping(path="/paciente")
public class PacienteController {

    @Autowired
    private PacienteRepository pacienteRepository;

    @Autowired
    private UsuariosRepository usuariosRepository;

    //Cria apenas um Paciente
//    @PostMapping(path="/createPaciente")
//    public @ResponseBody ApiResponse createPaciente (@RequestParam String nome
//            , @RequestParam String email, @RequestParam String cpf
//            , @RequestParam Usuario usuario) {
//        try {
//            Paciente n = new Paciente();
//            n.setNome(nome);
//            n.setEmail(email);
//            n.setCpf(cpf);
//            n.setUsuario(usuario);
//            pacienteRepository.save(n);
//            return new ApiResponse(1, "Paciente criado com sucesso!");
//        }catch (DataIntegrityViolationException e){
//            System.out.println(e.getMessage());
//            return new ApiResponse(0, e.getLocalizedMessage());
//        }
//    }

    //Este serviço cria Um Usuário e já refencia este à um novo paciente
    @PostMapping(path="/createPacienteUsuario")
    public @ResponseBody ApiResponse createPaciente (@RequestParam String nome
            , @RequestParam String email, @RequestParam String cpf
            , @RequestParam String senha, @RequestParam PerfilDeAcesso perfilDeAcesso) {
        try {
            Usuario u = new Usuario();
            u.setSenha(senha);
            u.setEmail(email);
            u.setPerfilDeAcesso(perfilDeAcesso);
            usuariosRepository.save(u);

            Paciente n = new Paciente();
            n.setNome(nome);
            n.setEmail(email);
            n.setCpf(cpf);
            n.setUsuario(u);
            pacienteRepository.save(n);

            return new ApiResponse(1, "Paciente e Usuário criado com sucesso!");
        }catch (DataIntegrityViolationException e){
            System.out.println(e.getMessage());
            return new ApiResponse(0, e.getLocalizedMessage());
        }
    }

    @DeleteMapping(path="/deletePaciente")
    public @ResponseBody ApiResponse deletePaciente (@RequestParam Integer id) {
        pacienteRepository.deleteById(id);
        return new ApiResponse(1, "Paciente deletado com sucesso!");
    }
}
