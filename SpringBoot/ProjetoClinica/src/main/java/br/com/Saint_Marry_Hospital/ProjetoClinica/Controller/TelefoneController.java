package br.com.Saint_Marry_Hospital.ProjetoClinica.Controller;

import br.com.Saint_Marry_Hospital.ProjetoClinica.ApiResponse;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Paciente;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Telefone;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Repository.TelefoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/telefone")
public class TelefoneController {

    @Autowired
    private TelefoneRepository telefoneRepository;

    @PostMapping(path="/createTelefone")
    public @ResponseBody ApiResponse createPaciente (@RequestParam String numero
            , @RequestParam Integer ddd, @RequestParam Paciente paciente) {

        Telefone n = new Telefone();
        n.setNumero(numero);
        n.setDdd(ddd);
        n.setPaciente(paciente);
        telefoneRepository.save(n);

        return new ApiResponse(1, "Telefone criado com sucesso!");
    }

    @DeleteMapping(path="/deleteTelefone")
    public @ResponseBody ApiResponse deletePTelefone(@RequestParam Integer id) {
        telefoneRepository.deleteById(id);
        return new ApiResponse(1, "Telefone deletado com sucesso!");
    }


}