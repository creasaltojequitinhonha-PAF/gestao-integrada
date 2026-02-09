// --- CONFIGURAÇÃO DO RMA ---
const LINK_PLANILHA_STATUS = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRNo1Y9qY1yAnErz_e1s26mpUD6vGxvzfsWbB0fwDxkQf9LadfBouevcOopjdJSZHIPR7vEnG39eDtx/pub?gid=641766743&single=true&output=csv";
const MESES_NOMES = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];

let rmaPendente = false; 

const menus = {
    paefi_unificado: {
        titulo: "PAEFI - Gestão, Registro Simplificado e Acolhida",
        opcoes: [
            { texto: "PAEFI - Registro Simplificado Atendimento Geral", link: "https://docs.google.com/spreadsheets/d/1NZYngl8WRcRWzIJ2xytYqkSY_2jxLrJqU0a_MPQqImo/edit?usp=sharing", icone: "fa-users-gear" },
            { texto: "Ficha Acolhida Inicial - Couto", link: "https://docs.google.com/document/d/1aepYWuwdNGFBLjBHPtHItH8q2EjMS6L-/edit?usp=sharing&ouid=105013242170562667223&rtpof=true&sd=true", icone: "fa-file-signature" },
            { texto: "Ficha Acolhida Inicial - Datas", link: "https://docs.google.com/document/d/1QDVycTzAlBb6znj6Me2yOtpHoiZ125GZ/edit?usp=sharing&ouid=105013242170562667223&rtpof=true&sd=true", icone: "fa-file-signature" },
            { texto: "Ficha Acolhida Inicial - Gouveia", link: "https://docs.google.com/document/d/1wvfsNW5gdyiJblacOxRGoLze8z34AXWu/edit?usp=sharing&ouid=105013242170562667223&rtpof=true&sd=true", icone: "fa-file-signature" },
            { texto: "Ficha Acolhida Inicial - Monjolos", link: "https://docs.google.com/document/d/1G8yiZC50k9DkMx9XrpzEhZipVo4AtBZP/edit?usp=sharing&ouid=105013242170562667223&rtpof=true&sd=true", icone: "fa-file-signature" },
            { texto: "Ficha Acolhida Inicial - SGRP", link: "https://docs.google.com/document/d/1wR7gLwC71B_JhtWuQhp-v7LqmSqXptHr/edit?usp=sharing&ouid=105013242170562667223&rtpof=true&sd=true", icone: "fa-file-signature" },
            { texto: "Registro Simplificado  - Couto Magalhães", link: "https://docs.google.com/spreadsheets/d/1wlp8VDHyJ_RVM_JQqKa0W7OBkoiC7g8a/edit?usp=drive_link", icone: "fa-house-user" },
            { texto: "Registro Simplificado  - Datas", link: "https://docs.google.com/spreadsheets/d/1nwvRUkZ28zBsCUoHHxPH9WGpxwERSbxH/edit?usp=drive_link", icone: "fa-house-user" },
            { texto: "Registro Simplificado  - Gouveia", link: "https://docs.google.com/spreadsheets/d/1D9TcIl95xBVtyKbvlSNxFDAwWm7acPRc/edit?usp=drive_link&ouid=105013242170562667223&rtpof=true&sd=true", icone: "fa-house-user" },
            { texto: "Registro Simplificado  - Monjolos", link: "https://docs.google.com/spreadsheets/d/1CY6gBnp_KtISHzFf0L7fc7ZeHncMcjkI/edit?usp=drive_link&ouid=105013242170562667223&rtpof=true&sd=true", icone: "fa-house-user" },
            { texto: "Registro Simplificado  - SGRP", link: "https://docs.google.com/spreadsheets/d/178aswuI1TMy-nBWaWsg3wNfaK97Tp8ah/edit?usp=drive_link&ouid=105013242170562667223&rtpof=true&sd=true", icone: "fa-house-user" }
        ]
    },
    judicial: {
        titulo: "Acompanhamento Judicial Geral",
        opcoes: [
            { texto: "Judicial - Geral", link: "https://docs.google.com/spreadsheets/d/1UlLNV0h7WTAxoqweuErJSZpsO4VHrAcbaOgwhN_41L8/edit#gid=568686738", icone: "fa-scale-balanced" },
            { texto: "Não Judicial - Geral", link: "https://docs.google.com/spreadsheets/d/1jd5SBMla7clu9k1bDV0ySaeGTy3akiFE/edit?usp=sharing", icone: "fa-file-signature" },
            { texto: "Acompanhamento Advogada", link: "https://docs.google.com/spreadsheets/d/1caVrvRYtgsLrqDEKLZFfk5SZkhxzmKc_1R4HG9yjmI8/edit?usp=sharing", icone: "fa-user-tie" }
        ]
    },
    judicial_municipios: {
        titulo: "Acompanhamento Judicial por Município",
        opcoes: [
            { texto: "Couto", link: "https://docs.google.com/spreadsheets/d/1A--k28WWA65p3eCVtVUSk_8-SYDw_Yzg0Us8Q-K3wsU/edit?usp=sharing", icone: "fa-location-dot" },
            { texto: "Datas", link: "https://docs.google.com/spreadsheets/d/17aRg8A6yONUQxzkz-Q54XkLy3Mq_3CAthrftBKQQY0s/edit?usp=sharing", icone: "fa-location-dot" },
            { texto: "Gouveia", link: "https://docs.google.com/spreadsheets/d/1zyqqIz9bLVpFzLi-FUNl1HFIBGaYSUGjltxPnIyF8Rg/edit?usp=sharing", icone: "fa-location-dot" },
            { texto: "Monjolos", link: "https://docs.google.com/spreadsheets/d/1FglFe7-Cx29zB0jWskcn7C9fa-1a_g3_VKJK09LMxu4/edit?usp=sharing", icone: "fa-location-dot" },
            { texto: "SGRP", link: "https://docs.google.com/spreadsheets/d/1E6hj8LKbEU9cZYrmxND5ZbE8EJILLNN8N4t0joN9pK0/edit#gid=0", icone: "fa-location-dot" }
        ]
    },
    fichas_familia: {
        titulo: "Fichas de Acompanhamento Familiar",
        opcoes: [
            { texto: "Ficha - Couto", link: "https://docs.google.com/document/d/1iJTbClbZyoXcSiD0Xz1mv3h3BlB84OnH/edit?usp=sharing", icone: "fa-file-lines" },
            { texto: "Ficha - Datas", link: "https://docs.google.com/document/d/12NDaPKBEZcy5aHEEkD0-h3qnoQ6EWUKY/edit?usp=sharing", icone: "fa-file-lines" },
            { texto: "Ficha - Gouveia", link: "https://docs.google.com/document/d/1XmnGkgHTq3DZ_8uFEZ7F5dW7ZAg0EYdV/edit?usp=sharing", icone: "fa-file-lines" },
            { texto: "Ficha - Monjolos", link: "https://docs.google.com/document/d/1R-TaCEPmZEp6pCcenaSX-0j1KjwPc3l4/edit?usp=sharing&ouid=105013242170562667223&rtpof=true&sd=true", icone: "fa-file-lines" },
            { texto: "Ficha - SGRP", link: "https://docs.google.com/document/d/1AFHb1sMadIMLDluBkdVe6iEOZ6Whgjo9/edit?usp=sharing", icone: "fa-file-lines" }
        ]
    },
    mulher: {
        titulo: "Ficha de Acompanhamento à Mulher",
        opcoes: [
            { texto: "Ficha de Acolhimento à Mulher - Couto", link: "https://docs.google.com/document/d/182m31Wt2OEnPxHDOnLWlldgo4P6xilEmSMZJARaqMg4/edit?usp=sharing", icone: "fa-file-waveform" },
            { texto: "Ficha de Acompanhamento à Mulher - Datas", link: "https://docs.google.com/document/d/12fkWp7TYh5U4qi8aGSfWUoG0227Y7y50Rp4t5iJHFlM/edit?usp=sharing", icone: "fa-file-waveform" },
            { texto: "Ficha de Acompanhamento à Mulher - Gouveia", link: "https://docs.google.com/document/d/1PYvadvEWFwqSaYUA2YF8hG2jIlDWA48VbbPMwb1JFAk/edit?usp=sharing", icone: "fa-file-waveform" },
            { texto: "Ficha de Acompanhamento à Mulher - Monjolos", link: "https://docs.google.com/document/d/1ZvlAmua2MChaZeZPpnSsMf2k-v7nkitip8N7_LVQABo/edit?usp=sharing", icone: "fa-file-waveform" },
            { texto: "Ficha de Acompanhamento à Mulher - SGRP", link: "https://docs.google.com/document/d/1fr7zxgF9ffuKLfiFoMHGbRawr-tE6r_EdkZIxLTcvU4/edit?usp=sharing", icone: "fa-file-waveform" }
        ]
    },
    recepcao: {
        titulo: "Recepção",
        opcoes: [ { texto: "Acessar Planilha Recepção", link: "https://docs.google.com/spreadsheets/d/1UDNi5E4yHdjVN-0TqT2mSH_Zlb1_n4FC/edit?usp=sharing", icone: "fa-clipboard-user" } ]
    },
    oficios: {
        titulo: "Ofícios 2026",
        opcoes: [ { texto: "Acessar Controle de Ofícios", link: "https://docs.google.com/spreadsheets/d/1nLMOare0F1WojJBoV_RujKnGUgHN8MdCJx_h2EkwUiw/edit?usp=sharing", icone: "fa-file-export" } ]
    },
    contatos: {
        titulo: "Lista de Contatos",
        opcoes: [ { texto: "Acessar Contatos", link: "https://docs.google.com/spreadsheets/d/1qIu1ROZTg5iYd0MT7Jh5ubq6OHUDctMXLjRzsXCKykQ/edit?usp=sharing", icone: "fa-address-book" } ]
    },
    agenda: {
        titulo: "Agenda 2026",
        opcoes: [ { texto: "Acessar Agenda 2026", link: "https://docs.google.com/spreadsheets/d/1Fu3tJtWvoZnxHs1RoKOlGB_Cj2zNsRXY1PC_cRg5QuU/edit?gid=1596965929", icone: "fa-calendar-days" } ]
    },
    rma: {
        titulo: "RMA",
        opcoes: [ 
            { texto: "Controle de Envio", link: "https://docs.google.com/spreadsheets/d/1fzq-MYLgB1Z4EZjfJnDfVSKx4ClSgveisMMSQcP6BMw/edit?usp=sharing", icone: "fa-chart-simple" },
            { texto: "Planilha RMA", link: "https://docs.google.com/spreadsheets/d/1pReSzUNUYKIs5syqHVxzMPnuGJBC_0eP2PJWJmdazpI/edit?usp=sharing", icone: "fa-magnifying-glass-chart" }
        ]
    },
    historico: {
        titulo: "Histórico",
        opcoes: [ { texto: "Controle SEDESE 2021", link: "https://docs.google.com/spreadsheets/d/14orG_IfnGtQrbsojIjOTTgx-trAVmSH8/edit#gid=409096394", icone: "fa-box-archive" } ]
    },
    gemini_ajuda: {
        titulo: "Ajuda com IA (Google Gemini)",
        opcoes: [
            { texto: "Fazer uma Pergunta ao Gemini", link: "https://gemini.google.com/", icone: "fa-solid fa-robot" }
        ]
    }
};

// --- FUNÇÕES DE INTERFACE ---
function filtrarAvancado() {
    const termo = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        const txt = card.innerText.toLowerCase();
        card.style.display = txt.includes(termo) ? "flex" : "none";
    });
}

function abrirModal(tipo) {
    const m = menus[tipo]; if(!m) return;
    document.getElementById('modalTitle').innerText = m.titulo;
    document.getElementById('modalOptions').innerHTML = m.opcoes.map(o => {
        const mostrarBadge = (o.texto === "Controle de Envio" && rmaPendente);
        return `
            <a href="${o.link}" target="_blank" class="modal-option">
                <i class="fa-solid ${o.icone}"></i> ${o.texto}
                ${mostrarBadge ? '<span class="badge-pendente">Pendente</span>' : ''}
            </a>
        `;
    }).join('');
    document.getElementById('modalUniversal').style.display = 'flex';
}

function fecharModal() { 
    document.getElementById('modalUniversal').style.display = 'none'; 
}

// --- LÓGICA DO PULSAR (RMA) ---
async function verificarPendenciasRMA() {
    try {
        const resposta = await fetch(LINK_PLANILHA_STATUS + "&t=" + new Date().getTime());
        const csv = await resposta.text();
        const linhas = csv.split(/\r?\n/);
        
        const dataAtual = new Date();
        const mesAtualIndex = dataAtual.getMonth();
        const diaDoMes = dataAtual.getDate(); // Pega o dia de hoje

        // NOVA REGRA: 
        // 1. Se for Janeiro, não pulsa (ano anterior).
        // 2. Se for qualquer outro mês, só pulsa se já for DIA 8 ou mais.
        if (mesAtualIndex === 0 || diaDoMes < 8) {
            rmaPendente = false;
            console.log("Pulsar desativado: aguardando prazo do dia 08.");
        } else {
            const mesAnterior = MESES_NOMES[mesAtualIndex - 1].toUpperCase();
            let achouData = false;

            for (let l of linhas) {
                if (l.toUpperCase().includes(mesAnterior) && l.includes('/')) {
                    achouData = true;
                    break;
                }
            }
            rmaPendente = !achouData;
            console.log("Verificando mês: " + mesAnterior + " | Status: " + (achouData ? "OK" : "PENDENTE"));
        }

        const card = document.getElementById('card-rma');
        if (card) {
            rmaPendente ? card.classList.add('alerta-vencido') : card.classList.remove('alerta-vencido');
        }
    } catch (e) { console.error("Erro RMA:", e); }
}

// --- INICIALIZAÇÃO ---
window.onload = () => {
    verificarPendenciasRMA();
    setInterval(verificarPendenciasRMA, 60000);
};

window.onclick = (e) => { 
    if(e.target.id == 'modalUniversal') fecharModal(); 
};
// ==========================================
// CONFIGURAÇÃO FIREBASE (PAF)
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyBnHxMaz-JoMuFmz80kD9SDLAOYH0w_Sps",
  authDomain: "sistema-creas-paf.firebaseapp.com",
  projectId: "sistema-creas-paf",
  storageBucket: "sistema-creas-paf.appspot.com",
  messagingSenderId: "57137105910",
  appId: "1:57137105910:web:690ebff3cbad88e283527"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const CHAVE_COLECAO = "pacientes_paf";
let mapaPacientes = {};

// ==========================================
// FUNÇÃO PARA LISTAR TODOS OS REGISTROS
// ==========================================
async function listarPacientes() {
    const datalist = document.getElementById('lista-pacientes');
    if (!datalist) return;
    
    try {
        // Busca direta no servidor para evitar cache incompleto
        const snapshot = await db.collection(CHAVE_COLECAO).get({ source: 'server' });
        
        datalist.innerHTML = ''; 
        mapaPacientes = {}; 
        
        snapshot.forEach(doc => {
            const p = doc.data();
            // Pega o nome do responsável familiar
            const nome = (p.inputs && p.inputs.resp_familiar) ? p.inputs.resp_familiar : (p.resp_familiar || "Sem Nome");
            const textoBusca = `${nome.toUpperCase()} - CPF: ${doc.id}`;
            
            const option = document.createElement('option');
            option.value = textoBusca;
            datalist.appendChild(option);
            
            mapaPacientes[textoBusca] = doc.id;
        });
        console.log(`✅ Sucesso: ${snapshot.size} registros carregados do PAF.`);
    } catch (e) { 
        console.error("Erro ao carregar banco de dados:", e); 
    }
}

// Chame a listagem também no carregamento
const originalOnload = window.onload;
window.onload = () => {
    if (originalOnload) originalOnload();
    listarPacientes();
};
