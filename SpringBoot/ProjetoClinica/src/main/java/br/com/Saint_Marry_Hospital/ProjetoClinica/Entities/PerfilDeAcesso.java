package br.com.Saint_Marry_Hospital.ProjetoClinica.Entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

@Entity
public class PerfilDeAcesso {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "perfil_de_acesso_seq", allocationSize = 1)
    private Integer idPerfilDeAcesso;

    @NotNull(message = "O código é obrigatório")
    @Column(unique = true)
    private Integer codigo;

    public PerfilDeAcesso() {}

    public PerfilDeAcesso(Integer idPerfilDeAcesso, Integer codigo) {
        this.idPerfilDeAcesso = idPerfilDeAcesso;
        this.codigo = codigo;
    }

    public Integer getIdPerfilDeAcesso() {
        return idPerfilDeAcesso;
    }

    public Integer getCodigo() {
        return codigo;
    }

    public void setIdPerfilDeAcesso(Integer idPerfilDeAcesso) {
        this.idPerfilDeAcesso = idPerfilDeAcesso;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }
}
