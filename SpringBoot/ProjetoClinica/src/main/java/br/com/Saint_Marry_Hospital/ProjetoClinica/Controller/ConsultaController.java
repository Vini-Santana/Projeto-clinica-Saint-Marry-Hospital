package br.com.Saint_Marry_Hospital.ProjetoClinica.Controller;

import br.com.Saint_Marry_Hospital.ProjetoClinica.ApiResponse;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.*;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Repository.ConsultaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/consulta")
public class ConsultaController {

    @Autowired
    private ConsultaRepository consultaRepository;

    @PostMapping(path="/createConsulta")
    public @ResponseBody ApiResponse createPaciente (@RequestParam Horario horario
            , @RequestParam Paciente paciente, @RequestParam Especialidade especialidade) {

        Consulta n = new Consulta();
        n.setHorario(horario);
        n.setPaciente(paciente);
        n.setEspecialidade(especialidade);
        consultaRepository.save(n);

        return new ApiResponse(1, "Consulta criado com sucesso!");
    }

    @DeleteMapping(path="/deleteConsulta")
    public @ResponseBody ApiResponse deleteConsulta(@RequestParam Integer id) {
        consultaRepository.deleteById(id);
        return new ApiResponse(1, "Consulta deletado com sucesso!");
    }


}