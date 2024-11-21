package br.com.Saint_Marry_Hospital.ProjetoClinica.Entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

@Entity
public class Horario {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "horario_seq", allocationSize = 1)
    private Integer idHorario;

    @NotNull
    @Column(unique = true)
    private LocalDateTime horario;

    public Horario() {
    }

    public Horario(LocalDateTime horario) {
        this.horario = horario;
    }

    public Integer getIdHorario() {
        return idHorario;
    }

    public void setIdHorario(Integer idHorario) {
        this.idHorario = idHorario;
    }

    public LocalDateTime getHorario() {
        return horario;
    }

    public void setHorario(@NotBlank(message = "O numero é obrigatório") LocalDateTime horario) {
        this.horario = horario;
    }

}
