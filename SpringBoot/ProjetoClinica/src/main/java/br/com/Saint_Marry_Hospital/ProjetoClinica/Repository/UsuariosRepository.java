package br.com.Saint_Marry_Hospital.ProjetoClinica.Repository;

import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Usuario;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UsuariosRepository extends CrudRepository<Usuario, Integer> {

}