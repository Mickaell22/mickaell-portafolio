import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer"
import { getCvContent } from "./content"
import { routing, type Locale } from "../../i18n/routing"

// Formato Harvard: una sola columna ATS-friendly, cabecera centrada, Educacion
// primero, cada entrada con organizacion + ubicacion (derecha) en la 1ra linea
// y cargo/titulo + fecha (derecha) en la 2da. Secciones con titulo en negrita y
// regla. Sin resumen ni subtitulo.
const c = {
  black: "#000000",
  text: "#1a1a1a",
  mid: "#333333",
  muted: "#555555",
}

const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: c.text,
    paddingTop: 38,
    paddingBottom: 38,
    paddingHorizontal: 54,
    lineHeight: 1.4,
  },
  name: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: c.black,
    textAlign: "center",
    letterSpacing: 0.5,
    marginBottom: 3,
  },
  contact: {
    fontSize: 8.5,
    color: c.mid,
    textAlign: "center",
    marginBottom: 8,
  },
  headerRule: {
    borderBottomWidth: 1,
    borderBottomColor: c.black,
    marginBottom: 8,
  },
  section: {
    marginBottom: 9,
  },
  sectionTitle: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: c.black,
    borderBottomWidth: 0.75,
    borderBottomColor: c.black,
    paddingBottom: 2,
    marginBottom: 5,
  },
  entry: {
    marginBottom: 7,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 0.5,
  },
  org: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9.5,
    color: c.black,
    flex: 1,
  },
  right: {
    fontSize: 9,
    color: c.mid,
    textAlign: "right",
    marginLeft: 8,
  },
  subline: {
    fontFamily: "Helvetica-Oblique",
    fontSize: 9,
    color: c.mid,
    flex: 1,
  },
  note: {
    fontSize: 8.5,
    color: c.muted,
    marginTop: 0.5,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 1.5,
    marginTop: 1.5,
    paddingLeft: 4,
  },
  bulletDot: {
    width: 10,
    fontSize: 9,
    color: c.mid,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    color: c.mid,
  },
  projStack: {
    fontSize: 8,
    color: c.muted,
    textAlign: "right",
    marginLeft: 8,
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 2.5,
  },
  skillLabel: {
    width: 100,
    fontFamily: "Helvetica-Bold",
    color: c.text,
    fontSize: 8.5,
  },
  skillValue: {
    flex: 1,
    color: c.mid,
    fontSize: 8.5,
  },
})

function Bullet({ text }: { text: string }) {
  return (
    <View style={s.bullet}>
      <Text style={s.bulletDot}>•</Text>
      <Text style={s.bulletText}>{text}</Text>
    </View>
  )
}

export function CvDocument({
  locale = routing.defaultLocale,
}: {
  locale?: Locale
}) {
  const cv = getCvContent(locale)

  return (
    <Document title={`CV — ${cv.name}`} author={cv.name}>
      <Page size="A4" style={s.page}>

        {/* Cabecera centrada */}
        <Text style={s.name}>{cv.name}</Text>
        <Text style={s.contact}>{cv.contacts.join("   •   ")}</Text>
        <View style={s.headerRule} />

        {/* Educacion */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>{cv.labels.education}</Text>
          {cv.education.map((edu) => (
            <View key={edu.degree} style={s.entry}>
              <View style={s.entryHeader}>
                <Text style={s.org}>{edu.institution}</Text>
                <Text style={s.right}>{edu.location}</Text>
              </View>
              <View style={s.entryHeader}>
                <Text style={s.subline}>{edu.degree}</Text>
                <Text style={s.right}>{edu.period}</Text>
              </View>
              {edu.note ? <Text style={s.note}>{edu.note}</Text> : null}
            </View>
          ))}
        </View>

        {/* Experiencia */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>{cv.labels.experience}</Text>
          {cv.experiences.map((exp) => (
            // wrap={false}: una entrada no se parte entre paginas (cabecera en
            // una y sus bullets en la siguiente).
            <View key={exp.company} style={s.entry} wrap={false}>
              <View style={s.entryHeader}>
                <Text style={s.org}>{exp.company}</Text>
                <Text style={s.right}>{exp.location}</Text>
              </View>
              <View style={s.entryHeader}>
                <Text style={s.subline}>{exp.role}</Text>
                <Text style={s.right}>{exp.period}</Text>
              </View>
              {exp.bullets.map((b) => (
                <Bullet key={b} text={b} />
              ))}
            </View>
          ))}
        </View>

        {/* Proyectos */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>{cv.labels.projects}</Text>
          {cv.projects.map((p) => (
            <View key={p.name} style={s.entry} wrap={false}>
              <View style={s.entryHeader}>
                <Text style={s.org}>{p.name}</Text>
                <Text style={s.right}>{p.link}</Text>
              </View>
              <View style={s.entryHeader}>
                <Text style={s.subline}>{p.tagline}</Text>
                <Text style={s.projStack}>{p.stack}</Text>
              </View>
              {p.bullets.map((b) => (
                <Bullet key={b} text={b} />
              ))}
            </View>
          ))}
        </View>

        {/* Habilidades (incluye idiomas) */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>{cv.labels.skills}</Text>
          {cv.skills.map(([label, value]) => (
            <View key={label} style={s.skillRow}>
              <Text style={s.skillLabel}>{label}</Text>
              <Text style={s.skillValue}>{value}</Text>
            </View>
          ))}
        </View>

      </Page>
    </Document>
  )
}
