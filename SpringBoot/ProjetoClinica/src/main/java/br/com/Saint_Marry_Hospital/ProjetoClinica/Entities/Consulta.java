package br.com.Saint_Marry_Hospital.ProjetoClinica.Entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

@Entity
public class Consulta {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "consulta_seq", allocationSize = 1)
    private Integer idConsulta;

    @ManyToOne
    @JoinColumn(name = "fk_idHorario", nullable = false)
    private Horario horario;

    @ManyToOne
    @JoinColumn(name = "fk_idPaciente", nullable = false)
    private Paciente paciente;

    @ManyToOne
    @JoinColumn(name = "fk_idEspecialidade", nullable = false)
    private Especialidade especialidade;

    public Consulta() {}

    public Consulta(Horario horario, Paciente paciente, Especialidade especialidade) {
        this.horario = horario;
        this.paciente = paciente;
        this.especialidade = especialidade;
    }

    public Integer getIdConsulta() {
        return idConsulta;
    }

    public void setIdConsulta(Integer idConsulta) {
        this.idConsulta = idConsulta;
    }

    public @NotNull Horario getHorario() {
        return horario;
    }

    public void setHorario(@NotNull Horario horario) {
        this.horario = horario;
    }

    public Paciente getPaciente() {
        return paciente;
    }

    public void setPaciente(Paciente paciente) {
        this.paciente = paciente;
    }

    public Especialidade getEspecialidade() {
        return especialidade;
    }

    public void setEspecialidade(Especialidade especialidade) {
        this.especialidade = especialidade;
    }
}
