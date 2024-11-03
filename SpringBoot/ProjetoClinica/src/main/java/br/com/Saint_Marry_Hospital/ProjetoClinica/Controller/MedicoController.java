package br.com.Saint_Marry_Hospital.ProjetoClinica.Controller;

import br.com.Saint_Marry_Hospital.ProjetoClinica.ApiResponse;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.*;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Repository.MedicoRepository;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Repository.PacienteRepository;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/medico")
public class MedicoController {

    @Autowired
    private MedicoRepository medicoRepository;

    @Autowired
    private UsuariosRepository usuariosRepository;

//    @PostMapping(path="/createMedico")
//    public @ResponseBody ApiResponse createMedico (@RequestParam String nome
//            , @RequestParam String email, @RequestParam Usuario usuario
//            , @RequestParam Especialidade especialidade) {
//
//        try {
//            Medico n = new Medico();
//            n.setNome(nome);
//            n.setEmail(email);
//            n.setEspecialidade(especialidade);
//            n.setUsuario(usuario);
//            medicoRepository.save(n);
//            return new ApiResponse(1, "Medico criado com sucesso!");
//        }catch (DataIntegrityViolationException e){
//            System.out.println(e.getMessage());
//            return new ApiResponse(0, e.getLocalizedMessage());
//        }
//    }

    @PostMapping(path="/createMedicoUsuario")
    public @ResponseBody ApiResponse createMedico (@RequestParam String nome
            , @RequestParam String email, @RequestParam Especialidade especialidade
            , @RequestParam String senha, @RequestParam PerfilDeAcesso perfilDeAcesso) {

        try {

            Usuario u = new Usuario();
            u.setSenha(senha);
            u.setEmail(email);
            u.setPerfilDeAcesso(perfilDeAcesso);
            usuariosRepository.save(u);

            Medico n = new Medico();
            n.setNome(nome);
            n.setEmail(email);
            n.setEspecialidade(especialidade);
            n.setUsuario(u);
            medicoRepository.save(n);
            return new ApiResponse(1, "Medico criado com sucesso!");
        }catch (DataIntegrityViolationException e){
            System.out.println(e.getMessage());
            return new ApiResponse(0, e.getLocalizedMessage());
        }
    }

    @DeleteMapping(path="/deleteMedico")
    public @ResponseBody ApiResponse deletePaciente (@RequestParam Integer id) {
        medicoRepository.deleteById(id);
        return new ApiResponse(1, "Paciente deletado com sucesso!");
    }
}
