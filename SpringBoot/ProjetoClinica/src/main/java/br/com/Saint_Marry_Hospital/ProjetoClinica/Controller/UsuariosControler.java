package br.com.Saint_Marry_Hospital.ProjetoClinica.Controller;

import br.com.Saint_Marry_Hospital.ProjetoClinica.ApiResponse;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Entities.Usuario;
import br.com.Saint_Marry_Hospital.ProjetoClinica.Repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/login")
public class UsuariosControler {

    @Autowired
    private UsuariosRepository usuariosRepository;

    @PostMapping(path="/createUsuario")
    public @ResponseBody ApiResponse  createUsuario (@RequestParam String email
            , @RequestParam String senha) {

        try {
            Usuario n = new Usuario();
            n.setSenha(senha);
            n.setEmail(email);
            usuariosRepository.save(n);
            return new ApiResponse(1, "Usuário criado com sucesso!");
        }catch (TransactionSystemException e){
            System.out.println("Login e senha devem ser preenchidos: "+ e.getClass());
            return new ApiResponse(0, "Login e senha devem ser preenchidos: ");
        }catch (DataIntegrityViolationException e){
            System.out.println("Usuário já existe: "+ e.getClass());
            return new ApiResponse(0, "Usuário já existe ");
        }
    }

    @PostMapping(path="/validaLogin")
    public @ResponseBody ApiResponse validaLogin (@RequestParam String email
            , @RequestParam String senha) {

        List<Usuario> listaUsuarios = (List<Usuario>) usuariosRepository.findAll();
        usuariosRepository.findAll();

        for (Usuario usuario : listaUsuarios) {
            if (usuario.getEmail().equals(email)) {
                // Se encontrar o email, você pode validar a senha aqui
                if (usuario.getSenha().equals(senha)) {
                    // Login e senha corretos
                    return new ApiResponse(1, "Login efetuado com sucesso "); // Retorne 1 se a validação for bem-sucedida
                }
//                else {
//                    // Senha incorreta
//                    return new ApiResponse(0, "Usuário ou senha inválidos"); // Retorne 0 ou outro valor apropriado se a senha estiver errada
//                }

            }
        }
        // Login não encontrado
        return new ApiResponse(0, "Usuário ou senha inválidos");
    }

    @GetMapping(path="/")
    public @ResponseBody Iterable<Usuario> getAllUsers() {
        // This returns a JSON or XML with the users
        return usuariosRepository.findAll();
    }
}
