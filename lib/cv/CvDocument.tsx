import { Document, Page, View, Text, StyleSheet, Link } from "@react-pdf/renderer"

const c = {
  black: "#09090b",
  dark: "#18181b",
  mid: "#3f3f46",
  muted: "#71717a",
  light: "#a1a1aa",
  border: "#e4e4e7",
  white: "#ffffff",
}

const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: c.dark,
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 48,
    lineHeight: 1.45,
  },
  // Cabecera
  name: { fontSize: 20, fontFamily: "Helvetica-Bold", color: c.black, marginBottom: 2 },
  title: { fontSize: 10, color: c.muted, marginBottom: 6 },
  contactRow: { flexDirection: "row", flexWrap: "wrap", gap: 10, marginBottom: 2 },
  contactItem: { fontSize: 8, color: c.muted },
  divider: { borderBottomWidth: 0.5, borderBottomColor: c.border, marginVertical: 10 },
  // Secciones
  section: { marginBottom: 10 },
  sectionTitle: {
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: c.muted,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  // Tabla habilidades
  skillRow: { flexDirection: "row", marginBottom: 3 },
  skillLabel: { width: 90, fontFamily: "Helvetica-Bold", color: c.mid, fontSize: 8 },
  skillValue: { flex: 1, color: c.mid, fontSize: 8 },
  // Experiencia
  expHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 1 },
  expCompany: { fontFamily: "Helvetica-Bold", fontSize: 9, color: c.black },
  expPeriod: { fontSize: 8, color: c.muted },
  expRole: { fontSize: 8, color: c.muted, marginBottom: 3 },
  bullet: { flexDirection: "row", marginBottom: 1.5 },
  bulletDash: { width: 10, color: c.light, fontSize: 8 },
  bulletText: { flex: 1, fontSize: 8, color: c.mid },
  // Proyectos
  projectHeader: { flexDirection: "row", alignItems: "baseline", gap: 6, marginBottom: 1 },
  projectName: { fontFamily: "Helvetica-Bold", fontSize: 9, color: c.black },
  projectLink: { fontSize: 7, color: c.muted },
  projectDesc: { fontSize: 8, color: c.mid, marginBottom: 1 },
  projectStack: { fontSize: 7, color: c.light },
  // Dos columnas
  twoCol: { flexDirection: "row", gap: 24 },
  col: { flex: 1 },
  // Edu / Cert
  entryHeader: { flexDirection: "row", justifyContent: "space-between" },
  entryTitle: { fontFamily: "Helvetica-Bold", fontSize: 8.5, color: c.black },
  entryPeriod: { fontSize: 8, color: c.muted },
  entrySub: { fontSize: 8, color: c.muted, marginBottom: 4 },
})

function Bullet({ text }: { text: string }) {
  return (
    <View style={s.bullet}>
      <Text style={s.bulletDash}>—</Text>
      <Text style={s.bulletText}>{text}</Text>
    </View>
  )
}

export function CvDocument() {
  return (
    <Document title="CV — Mickaell Morán Vera" author="Mickaell Morán Vera">
      <Page size="A4" style={s.page}>

        {/* Cabecera */}
        <Text style={s.name}>Mickaell Morán Vera</Text>
        <Text style={s.title}>Desarrollador Fullstack</Text>
        <View style={s.contactRow}>
          {[
            "mickaelmoranvera03@gmail.com",
            "+593 983777036",
            "Guayaquil, Ecuador",
            "github.com/Mickaell22",
            "linkedin.com/in/mickaell-moran-vera-ba421a2a3",
            "mickaell.novamicktools.com",
          ].map((item) => (
            <Text key={item} style={s.contactItem}>{item}</Text>
          ))}
        </View>

        <View style={s.divider} />

        {/* Perfil */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Perfil</Text>
          <Text style={s.bulletText}>
            Desarrollador fullstack freelance con proyectos reales en producción: SaaS gastronómico
            con IA multitenancy, sistema clínico con cliente pagado, simulador de exámenes en uso
            activo en la Universidad de Guayaquil. Experiencia en el ciclo completo — backend,
            frontend, mobile, deploy y automatización. Estudiante de 9no semestre de Ingeniería
            de Software en la Universidad de Guayaquil.
          </Text>
        </View>

        {/* Habilidades */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Habilidades técnicas</Text>
          {[
            ["Backend",        "Python, Django, FastAPI, Node.js, Express, C#, Java"],
            ["Frontend",       "React, Next.js, TypeScript, Tailwind CSS, Vite"],
            ["Mobile",         "Flutter, Dart, Riverpod, Firebase"],
            ["Bases de datos", "PostgreSQL, SQLAlchemy, Firebase Firestore, MySQL"],
            ["DevOps / Tools", "Git, Docker, Linux, Railway, VPS, Cloudinary"],
            ["Ciberseguridad", "Kali Linux, Metasploit, Nmap, Wireshark"],
          ].map(([label, skills]) => (
            <View key={label} style={s.skillRow}>
              <Text style={s.skillLabel}>{label}</Text>
              <Text style={s.skillValue}>{skills}</Text>
            </View>
          ))}
        </View>

        {/* Experiencia */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Experiencia</Text>

          <View style={{ marginBottom: 7 }}>
            <View style={s.expHeader}>
              <Text style={s.expCompany}>EcuaInventario</Text>
              <Text style={s.expPeriod}>2024 — actual</Text>
            </View>
            <Text style={s.expRole}>Co-fundador · Desarrollador fullstack · Guayaquil</Text>
            <Bullet text="SaaS gastronómico multitenancy con IA integrada, co-desarrollado con socio empresarial." />
            <Bullet text="Backend en Django 5 + DRF + PostgreSQL con arquitectura multitenancy — cada tenant con datos completamente aislados." />
            <Bullet text="Chat IA que interpreta texto, audio y fotos de facturas usando Claude Haiku (Anthropic) + Whisper (OpenAI)." />
            <Bullet text="App móvil en Flutter + Riverpod para gestión de inventario y pedidos en tiempo real." />
          </View>

          <View style={{ marginBottom: 7 }}>
            <View style={s.expHeader}>
              <Text style={s.expCompany}>Freelance</Text>
              <Text style={s.expPeriod}>2023 — actual</Text>
            </View>
            <Text style={s.expRole}>Desarrollador fullstack · Remoto, Guayaquil</Text>
            <Bullet text="Centro Médico Tía Glenda: sistema clínico integral con 190+ componentes en React + MUI. Cliente pagado, en uso real." />
            <Bullet text="Facturador: sistema de facturación y gestión de pedidos propio en producción en novamicktools.com (FastAPI + React + PostgreSQL)." />
            <Bullet text="SimuladorPreguntas: anticheating, roles admin/estudiante, exportación XML/Excel. En producción en la Universidad de Guayaquil." />
          </View>

          <View>
            <View style={s.expHeader}>
              <Text style={s.expCompany}>Área de Nivelación — Universidad de Guayaquil</Text>
              <Text style={s.expPeriod}>2025 · 6 meses</Text>
            </View>
            <Text style={s.expRole}>Practicante · Desarrollo de software</Text>
            <Bullet text="Lideré el desarrollo completo del SimuladorPreguntas: frontend, backend, pruebas y deploy en VPS institucional." />
            <Bullet text="Script de renombrado masivo: procesé en 5 minutos lo que tomaba una tarde completa por grupo (70+ archivos)." />
            <Bullet text="Script de red DHCP: automaticé el reset de conectividad, eliminando la dependencia de soporte técnico para el área." />
          </View>
        </View>

        {/* Proyectos */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Proyectos destacados</Text>
          {[
            {
              name: "mcp-context-server",
              link: "github.com/Mickaell22/mcp-context-server",
              desc: "Servidor MCP propio que indexa repositorios de GitHub con embeddings en PostgreSQL y los consulta por lenguaje natural. DeepSeek Flash como preprocesador. Operación segura vía Tailscale. En distribución pública.",
              stack: "Python · PostgreSQL · DeepSeek · Tailscale",
            },
            {
              name: "SimuladorPreguntas",
              link: "github.com/Mickaell22/SimuladorPreguntasBackend",
              desc: "Plataforma de simulacro de exámenes en producción en la Universidad de Guayaquil. Roles admin/estudiante, anticheating, importación masiva desde Excel/XML, historial de resultados.",
              stack: "Node.js · Express · PostgreSQL · React · Docker",
            },
            {
              name: "Facturador",
              link: "novamicktools.com",
              desc: "Sistema de facturación, pedidos y estadísticas propio en uso activo. Soft delete en todas las entidades, imágenes en Cloudinary, panel de ingresos por período.",
              stack: "FastAPI · React · PostgreSQL · Cloudinary",
            },
            {
              name: "EcuaInventario",
              link: "",
              desc: "SaaS gastronómico multitenancy con chat IA para registrar movimientos de inventario por texto, audio y foto de factura. Casi en producción.",
              stack: "Django · Flutter · PostgreSQL · Claude API · Whisper",
            },
          ].map(({ name, link, desc, stack }) => (
            <View key={name} style={{ marginBottom: 5 }}>
              <View style={s.projectHeader}>
                <Text style={s.projectName}>{name}</Text>
                {link ? <Text style={s.projectLink}>{link}</Text> : null}
              </View>
              <Text style={s.projectDesc}>{desc}</Text>
              <Text style={s.projectStack}>{stack}</Text>
            </View>
          ))}
        </View>

        {/* Educación + Certificaciones */}
        <View style={[s.twoCol, { marginBottom: 10 }]}>
          <View style={s.col}>
            <Text style={s.sectionTitle}>Educación</Text>
            <View style={{ marginBottom: 5 }}>
              <View style={s.entryHeader}>
                <Text style={s.entryTitle}>Ingeniería de Software</Text>
                <Text style={s.entryPeriod}>2021 — actual</Text>
              </View>
              <Text style={s.entrySub}>Universidad de Guayaquil · 9no semestre</Text>
            </View>
            <View>
              <View style={s.entryHeader}>
                <Text style={s.entryTitle}>Bachiller en Ciencias</Text>
                <Text style={s.entryPeriod}>2015 — 2020</Text>
              </View>
              <Text style={s.entrySub}>Unidad Educativa Leonidas Gracia</Text>
            </View>
          </View>

          <View style={s.col}>
            <Text style={s.sectionTitle}>Certificaciones</Text>
            <View style={{ marginBottom: 5 }}>
              <Text style={s.entryTitle}>Certified Ethical Hacker (CEH)</Text>
              <Text style={s.entrySub}>Hacker Mentor · Marzo 2023</Text>
            </View>
            <View>
              <Text style={s.entryTitle}>Google Ciberseguridad</Text>
              <Text style={s.entrySub}>Coursera · Foundations completado, 2025</Text>
            </View>
          </View>
        </View>

        {/* Idiomas */}
        <View>
          <Text style={s.sectionTitle}>Idiomas</Text>
          <Text style={s.bulletText}>Español: Nativo · Inglés: Intermedio (lectura avanzada)</Text>
        </View>

      </Page>
    </Document>
  )
}
