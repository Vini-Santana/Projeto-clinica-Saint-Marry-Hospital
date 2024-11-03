package br.com.Saint_Marry_Hospital.ProjetoClinica.Controller;

import br.com.Saint_Marry_Hospital.ProjetoClinica.ApiResponse;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Consulta;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Medico;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Paciente;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Telefone;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Repository.ConsultaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping(path="/consulta")
public class ConsultaController {

    @Autowired
    private ConsultaRepository consultaRepository;

    @PostMapping(path="/createConsulta")
    public @ResponseBody ApiResponse createPaciente (@RequestParam LocalDateTime horario
            , @RequestParam Paciente paciente, @RequestParam Medico medico) {

        Consulta n = new Consulta();
        n.setHorario(horario);
        n.setPaciente(paciente);
        n.setMedico(medico);
        consultaRepository.save(n);

        return new ApiResponse(1, "Consulta criado com sucesso!");
    }

    @DeleteMapping(path="/deleteConsulta")
    public @ResponseBody ApiResponse deleteConsulta(@RequestParam Integer id) {
        consultaRepository.deleteById(id);
        return new ApiResponse(1, "Consulta deletado com sucesso!");
    }


}