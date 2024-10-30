package br.com.Saint_Marry_Hospital.ProjetoClinica.Repository;

import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Medico;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Paciente;
import org.springframework.data.repository.CrudRepository;

public interface MedicoRepository extends CrudRepository<Medico, Integer> {

}