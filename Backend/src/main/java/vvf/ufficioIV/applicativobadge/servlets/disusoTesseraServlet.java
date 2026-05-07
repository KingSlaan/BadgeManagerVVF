package vvf.ufficioIV.applicativobadge.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Servlet implementation class disusoTesseraServlet
 */
@WebServlet("/disusoTesseraServlet")
public class disusoTesseraServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public disusoTesseraServlet() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
		//DAL FRONTEND MI ARRIVA DATA ORA DI INDISPONIBILITA' PER AGGIORNARE BASE DATI (METTENDO UNA DATA COME GIORNO DI OGGI O IERI SI RENDE LA TESSERA INDISPONIBILE DA OGGI IN POI)
		//IN OUTPUT INVIO CODICE DI RISPOSTA (200, 500, ...)
	}

}
