package br.com.Saint_Marry_Hospital.ProjetoClinica.Entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Especialidade {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "especialidade_seq", allocationSize = 1)
    private Integer idEspecialidade;

    @NotBlank(message = "O nome da especialdade é obrigatório")
    @Column(unique = true)
    private String nome;

    public Especialidade() {}

    public Especialidade(Integer idEspecialidade, String nome) {
        this.idEspecialidade = idEspecialidade;
        this.nome = nome;
    }

    public Integer getIdEspecialidade() {
        return idEspecialidade;
    }

    public void setIdEspecialidade(Integer idEspecialidade) {
        this.idEspecialidade = idEspecialidade;
    }

    public @NotBlank(message = "O nome da especialdade é obrigatório") String getNome() {
        return nome;
    }

    public void setNome(@NotBlank(message = "O nome da especialdade é obrigatório") String nome) {
        this.nome = nome;
    }
}
