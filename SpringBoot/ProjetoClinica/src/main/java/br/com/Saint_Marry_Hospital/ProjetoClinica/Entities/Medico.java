package br.com.Saint_Marry_Hospital.ProjetoClinica.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Medico {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idPaciente;
    private String nome;
    private String email;
    private String senha;
    private String cpf;
}
