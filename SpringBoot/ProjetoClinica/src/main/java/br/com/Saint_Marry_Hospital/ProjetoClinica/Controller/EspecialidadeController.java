package br.com.Saint_Marry_Hospital.ProjetoClinica.Controller;

import br.com.Saint_Marry_Hospital.ProjetoClinica.ApiResponse;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Especialidade;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.PerfilDeAcesso;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Usuario;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Repository.EspecialidadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/especialidade")
public class EspecialidadeController {

    @Autowired
    private EspecialidadeRepository especialidadeRepository;

    @PostMapping(path="/createEspecialidade")
    public @ResponseBody ApiResponse createEspecialidade(@RequestParam String nome) {

        try {
            Especialidade n = new Especialidade();
            n.setNome(nome);
            especialidadeRepository.save(n);
            return new ApiResponse(1, "Especialidade criado com sucesso!");
        }catch (TransactionSystemException e){
            System.out.println("Especialidade ser preenchida: "+ e.getMessage());
            return new ApiResponse(0, "Especialidade deve ser preenchida: ");
        }catch (DataIntegrityViolationException e){
            System.out.println("Usuário já existe: "+ e.getClass());
            return new ApiResponse(2, "Especialidade já existe");
        }
    }

    @GetMapping(path="/")
    public @ResponseBody Iterable<Especialidade> getAllEspecialidades() {

        return especialidadeRepository.findAll();
    }


    @DeleteMapping(path="/deleteEspecialidade")
    public @ResponseBody ApiResponse deletePTelefone(@RequestParam Integer id) {
        especialidadeRepository.deleteById(id);
        return new ApiResponse(1, "Especialidade deletado com sucesso!");
    }


}