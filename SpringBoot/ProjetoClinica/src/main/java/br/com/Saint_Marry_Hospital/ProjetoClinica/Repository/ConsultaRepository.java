package br.com.Saint_Marry_Hospital.ProjetoClinica.Repository;

import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Consulta;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Medico;
import org.springframework.data.repository.CrudRepository;

public interface ConsultaRepository extends CrudRepository<Consulta, Integer> {

}