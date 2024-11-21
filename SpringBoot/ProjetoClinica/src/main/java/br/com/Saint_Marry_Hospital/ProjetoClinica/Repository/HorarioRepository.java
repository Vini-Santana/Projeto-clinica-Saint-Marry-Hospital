package br.com.Saint_Marry_Hospital.ProjetoClinica.Repository;

import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Especialidade;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Horario;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface HorarioRepository extends CrudRepository<Horario, Integer> {

    // Consulta JPQL para buscar os horários que não estão associados a um médico específico
//    @Query("SELECT h.horario FROM Horario h WHERE h.idHorario NOT IN (" +
//            "SELECT c.horario.idHorario FROM Consulta c WHERE c.especialidade = :especialidade) " +
//            "AND h.horario >= :data")
//    List<LocalDateTime> findHorariosDisponiveisPorMedico(Integer especialidade, @Param("data") LocalDateTime data);

    @Query("SELECT h.horario FROM Horario h WHERE h.idHorario NOT IN (" +
            "SELECT c.horario.idHorario FROM Consulta c WHERE c.especialidade.idEspecialidade = :especialidadeId) " +
            "AND h.horario >= :data")
    List<LocalDateTime> findHorariosDisponiveisPorMedico(@Param("especialidadeId") Integer especialidadeId,
                                                         @Param("data") LocalDateTime data);




}