import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer"

const c = {
  black: "#09090b",
  dark: "#18181b",
  mid: "#3f3f46",
  muted: "#71717a",
  light: "#a1a1aa",
  border: "#e4e4e7",
}

const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: c.dark,
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 50,
    lineHeight: 1.5,
  },
  name: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    color: c.black,
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 10,
    color: c.muted,
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
  },
  contactItem: {
    fontSize: 8,
    color: c.muted,
    marginRight: 14,
    marginBottom: 2,
  },
  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: c.border,
    marginBottom: 12,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: c.muted,
    marginBottom: 7,
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  skillLabel: {
    width: 88,
    fontFamily: "Helvetica-Bold",
    color: c.mid,
    fontSize: 8,
  },
  skillValue: {
    flex: 1,
    color: c.mid,
    fontSize: 8,
  },
  expBlock: {
    marginBottom: 8,
  },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  expCompany: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: c.black,
  },
  expPeriod: {
    fontSize: 8,
    color: c.muted,
  },
  expRole: {
    fontSize: 8,
    color: c.muted,
    marginBottom: 4,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 2,
  },
  bulletDash: {
    width: 10,
    color: c.light,
    fontSize: 8,
  },
  bulletText: {
    flex: 1,
    fontSize: 8,
    color: c.mid,
  },
  projectBlock: {
    marginBottom: 6,
  },
  projectHeader: {
    flexDirection: "row",
    marginBottom: 2,
  },
  projectName: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: c.black,
    marginRight: 8,
  },
  projectLink: {
    fontSize: 7.5,
    color: c.muted,
    marginTop: 1,
  },
  projectDesc: {
    fontSize: 8,
    color: c.mid,
    marginBottom: 1,
  },
  projectStack: {
    fontSize: 7.5,
    color: c.light,
  },
  twoCol: {
    flexDirection: "row",
    marginBottom: 12,
  },
  col: {
    flex: 1,
    marginRight: 20,
  },
  colLast: {
    flex: 1,
  },
  entryBlock: {
    marginBottom: 6,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  entryTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8.5,
    color: c.black,
  },
  entryPeriod: {
    fontSize: 8,
    color: c.muted,
  },
  entrySub: {
    fontSize: 8,
    color: c.muted,
  },
  bodyText: {
    fontSize: 8.5,
    color: c.mid,
  },
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
        <Text style={s.subtitle}>Desarrollador Fullstack</Text>
        <View style={s.contactRow}>
          <Text style={s.contactItem}>mickaelmoranvera03@gmail.com</Text>
          <Text style={s.contactItem}>+593 983777036</Text>
          <Text style={s.contactItem}>Guayaquil, Ecuador</Text>
          <Text style={s.contactItem}>github.com/Mickaell22</Text>
          <Text style={s.contactItem}>linkedin.com/in/mickaell-moran-vera-ba421a2a3</Text>
          <Text style={s.contactItem}>mickaell.novamicktools.com</Text>
        </View>

        <View style={s.divider} />

        {/* Perfil */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>PERFIL</Text>
          <Text style={s.bodyText}>
            Desarrollador fullstack freelance con proyectos reales en producción: SaaS gastronómico con IA multitenancy, sistema clínico con cliente pagado, simulador de exámenes en uso activo en la Universidad de Guayaquil. Experiencia en el ciclo completo — backend, frontend, mobile, deploy y automatización. Estudiante de 9no semestre de Ingeniería de Software en la Universidad de Guayaquil.
          </Text>
        </View>

        {/* Habilidades */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>HABILIDADES TECNICAS</Text>
          <View style={s.skillRow}>
            <Text style={s.skillLabel}>Backend</Text>
            <Text style={s.skillValue}>Python, Django, FastAPI, Node.js, Express, C#, Java</Text>
          </View>
          <View style={s.skillRow}>
            <Text style={s.skillLabel}>Frontend</Text>
            <Text style={s.skillValue}>React, Next.js, TypeScript, Tailwind CSS, Vite</Text>
          </View>
          <View style={s.skillRow}>
            <Text style={s.skillLabel}>Mobile</Text>
            <Text style={s.skillValue}>Flutter, Dart, Riverpod, Firebase</Text>
          </View>
          <View style={s.skillRow}>
            <Text style={s.skillLabel}>Bases de datos</Text>
            <Text style={s.skillValue}>PostgreSQL, SQLAlchemy, Firebase Firestore, MySQL</Text>
          </View>
          <View style={s.skillRow}>
            <Text style={s.skillLabel}>DevOps / Tools</Text>
            <Text style={s.skillValue}>Git, Docker, Linux, Railway, VPS, Cloudinary</Text>
          </View>
          <View style={s.skillRow}>
            <Text style={s.skillLabel}>Ciberseguridad</Text>
            <Text style={s.skillValue}>Kali Linux, Metasploit, Nmap, Wireshark</Text>
          </View>
        </View>

        {/* Experiencia */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>EXPERIENCIA</Text>

          <View style={s.expBlock}>
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

          <View style={s.expBlock}>
            <View style={s.expHeader}>
              <Text style={s.expCompany}>Freelance</Text>
              <Text style={s.expPeriod}>2023 — actual</Text>
            </View>
            <Text style={s.expRole}>Desarrollador fullstack · Remoto, Guayaquil</Text>
            <Bullet text="Centro Médico Tía Glenda: sistema clínico integral con 190+ componentes en React + MUI. Cliente pagado, en uso real." />
            <Bullet text="Facturador: sistema de facturación y gestión de pedidos propio en producción en novamicktools.com (FastAPI + React + PostgreSQL)." />
            <Bullet text="SimuladorPreguntas: anticheating, roles admin/estudiante, exportación XML/Excel. En producción en la Universidad de Guayaquil." />
          </View>

          <View style={s.expBlock}>
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
          <Text style={s.sectionTitle}>PROYECTOS DESTACADOS</Text>

          <View style={s.projectBlock}>
            <View style={s.projectHeader}>
              <Text style={s.projectName}>mcp-context-server</Text>
              <Text style={s.projectLink}>github.com/Mickaell22/mcp-context-server</Text>
            </View>
            <Text style={s.projectDesc}>Servidor MCP propio que indexa repositorios de GitHub con embeddings en PostgreSQL y los consulta por lenguaje natural. DeepSeek Flash como preprocesador. Operación segura vía Tailscale. En distribución pública.</Text>
            <Text style={s.projectStack}>Python · PostgreSQL · DeepSeek · Tailscale</Text>
          </View>

          <View style={s.projectBlock}>
            <View style={s.projectHeader}>
              <Text style={s.projectName}>SimuladorPreguntas</Text>
              <Text style={s.projectLink}>github.com/Mickaell22/SimuladorPreguntasBackend</Text>
            </View>
            <Text style={s.projectDesc}>Plataforma de simulacro de exámenes en producción en la Universidad de Guayaquil. Roles admin/estudiante, anticheating, importación masiva desde Excel/XML, historial de resultados.</Text>
            <Text style={s.projectStack}>Node.js · Express · PostgreSQL · React · Docker</Text>
          </View>

          <View style={s.projectBlock}>
            <View style={s.projectHeader}>
              <Text style={s.projectName}>Facturador</Text>
              <Text style={s.projectLink}>novamicktools.com</Text>
            </View>
            <Text style={s.projectDesc}>Sistema de facturación, pedidos y estadísticas propio en uso activo. Soft delete en todas las entidades, imágenes en Cloudinary, panel de ingresos por período.</Text>
            <Text style={s.projectStack}>FastAPI · React · PostgreSQL · Cloudinary</Text>
          </View>

          <View style={s.projectBlock}>
            <View style={s.projectHeader}>
              <Text style={s.projectName}>EcuaInventario</Text>
            </View>
            <Text style={s.projectDesc}>SaaS gastronómico multitenancy con chat IA para registrar movimientos de inventario por texto, audio y foto de factura. Casi en producción.</Text>
            <Text style={s.projectStack}>Django · Flutter · PostgreSQL · Claude API · Whisper</Text>
          </View>
        </View>

        {/* Educación + Certificaciones */}
        <View style={s.twoCol}>
          <View style={s.col}>
            <Text style={s.sectionTitle}>EDUCACION</Text>
            <View style={s.entryBlock}>
              <View style={s.entryHeader}>
                <Text style={s.entryTitle}>Ingeniería de Software</Text>
                <Text style={s.entryPeriod}>2021 — actual</Text>
              </View>
              <Text style={s.entrySub}>Universidad de Guayaquil · 9no semestre</Text>
            </View>
            <View style={s.entryBlock}>
              <View style={s.entryHeader}>
                <Text style={s.entryTitle}>Bachiller en Ciencias</Text>
                <Text style={s.entryPeriod}>2015 — 2020</Text>
              </View>
              <Text style={s.entrySub}>Unidad Educativa Leonidas Gracia</Text>
            </View>
          </View>

          <View style={s.colLast}>
            <Text style={s.sectionTitle}>CERTIFICACIONES</Text>
            <View style={s.entryBlock}>
              <Text style={s.entryTitle}>Certified Ethical Hacker (CEH)</Text>
              <Text style={s.entrySub}>Hacker Mentor · Marzo 2023</Text>
            </View>
            <View style={s.entryBlock}>
              <Text style={s.entryTitle}>Google Ciberseguridad</Text>
              <Text style={s.entrySub}>Coursera · Foundations completado, 2025</Text>
            </View>
          </View>
        </View>

        {/* Idiomas */}
        <View>
          <Text style={s.sectionTitle}>IDIOMAS</Text>
          <Text style={s.bodyText}>Español: Nativo · Inglés: Intermedio (lectura avanzada)</Text>
        </View>

      </Page>
    </Document>
  )
}
