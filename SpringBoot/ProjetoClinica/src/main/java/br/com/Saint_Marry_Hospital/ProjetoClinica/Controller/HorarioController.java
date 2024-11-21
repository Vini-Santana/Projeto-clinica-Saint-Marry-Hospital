package br.com.Saint_Marry_Hospital.ProjetoClinica.Controller;

import br.com.Saint_Marry_Hospital.ProjetoClinica.ApiResponse;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Especialidade;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Horario;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Repository.HorarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping(path="/horario")
public class HorarioController {

    @Autowired
    private HorarioRepository horarioRepository;

    @PostMapping(path="/createHorario")
    public @ResponseBody ApiResponse createHorario(@RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss") LocalDateTime horario) {

        // Verifica o valor do horario para depuração
        System.out.println(horario);

        Horario n = new Horario(horario);  // Agora estamos passando o valor de 'horario' no construtor
        horarioRepository.save(n);

        return new ApiResponse(1, "Horario criado com sucesso!");
    }

    @DeleteMapping(path="/deleteHorario")
    public @ResponseBody ApiResponse deletePHorario(@RequestParam Integer id) {
        horarioRepository.deleteById(id);
        return new ApiResponse(1, "Horario deletado com sucesso!");
    }


//    @GetMapping("/horariosDisponiveis")
//    public List<LocalDateTime> getHorariosDisponiveis(@RequestParam Integer especialidade,
//                                                      @RequestParam LocalDateTime data) {
//        return horarioRepository.findHorariosDisponiveisPorMedico(especialidade, data);
//    }

//    @GetMapping("/horariosDisponiveis")
//    public List<LocalDateTime> getHorariosDisponiveis(@RequestParam Integer idEspecialidade,
//                                                      @RequestParam LocalDateTime data) {
//        // Cria uma instância de Especialidade com base no idEspecialidade, se necessário
//        Especialidade especialidade = new Especialidade(idEspecialidade, null);
//        return horarioRepository.findHorariosDisponiveisPorMedico(especialidade.getIdEspecialidade(), data);
//    }
@GetMapping("/horariosDisponiveis")
public List<LocalDateTime> getHorariosDisponiveis(@RequestParam Integer idEspecialidade,
                                                  @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) String data) {
    try {
        // Verifique o valor da data
        System.out.println("Recebendo data: " + data);

        // Converta para LocalDateTime
        LocalDateTime dataHora = LocalDateTime.parse(data);
        System.out.println("Data convertida: " + dataHora);

        Especialidade especialidade = new Especialidade(idEspecialidade, null);
        return horarioRepository.findHorariosDisponiveisPorMedico(especialidade.getIdEspecialidade(), dataHora);
    } catch (Exception e) {
        e.printStackTrace();
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Erro ao processar a data", e);
    }
}

}
