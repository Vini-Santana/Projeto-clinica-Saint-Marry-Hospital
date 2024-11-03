package br.com.Saint_Marry_Hospital.ProjetoClinica.Controller;

import br.com.Saint_Marry_Hospital.ProjetoClinica.ApiResponse;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Paciente;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.PerfilDeAcesso;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Telefone;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Repository.PerfilDeAcessoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/perfilDeAcesso")
public class PerfilDeAcessoController {

    @Autowired
    private PerfilDeAcessoRepository perfilDeAcessoRepository;

    @PostMapping(path="/createPerfilDeAcesso")
    public @ResponseBody ApiResponse createPerfilDeAcesso(@RequestParam Integer codigo) {

        PerfilDeAcesso n = new PerfilDeAcesso();
        n.setCodigo(codigo);
        perfilDeAcessoRepository.save(n);

        return new ApiResponse(1, "PerfilDeAcesso criado com sucesso!");
    }

    @DeleteMapping(path="/deleteperfilDeAcesso")
    public @ResponseBody ApiResponse deletePTelefone(@RequestParam Integer id) {
        perfilDeAcessoRepository.deleteById(id);
        return new ApiResponse(1, "PerfilDeAcesso deletado com sucesso!");
    }


}