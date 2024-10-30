package br.com.Saint_Marry_Hospital.ProjetoClinica.Repository;

import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Paciente;
import org.springframework.data.repository.CrudRepository;

public interface PacienteRepository extends CrudRepository<Paciente, Integer> {

}