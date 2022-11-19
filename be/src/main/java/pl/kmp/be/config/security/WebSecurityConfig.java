package pl.kmp.be.config.security;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import pl.kmp.be.bm.users.control.UsersRepository;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final UsersRepository usersRepository;

    @Override
    protected void configure(final AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(login -> usersRepository.findByUsername(login)
                        .orElseThrow(() -> new UsernameNotFoundException(String.format("User with login %s not found", login))))
                .passwordEncoder(passwordEncoder());
    }

    @Override
    protected void configure(final HttpSecurity http) throws Exception {
        // @formatter:off
        http.csrf().disable()
                .authorizeRequests()
                .antMatchers("/api/chats/**","/api/advanced").authenticated()
                .anyRequest().permitAll()
                .and()
                .formLogin()
                .loginPage("/")
                .loginProcessingUrl("/api/login")
                .successHandler((request, response, authentication) ->response.setStatus(HttpStatus.OK.value()))
                .failureHandler((request, response, exception) ->response.setStatus(HttpStatus.UNAUTHORIZED.value()))
                .and()
                .logout()
                .logoutUrl("/api/logout")
                .logoutSuccessHandler((request, response, authentication) -> response.sendRedirect("/"));
        // @formatter:on
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
