import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer"
import { getCvContent } from "./content"
import { routing, type Locale } from "../../i18n/routing"

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

export function CvDocument({
  locale = routing.defaultLocale,
}: {
  locale?: Locale
}) {
  const cv = getCvContent(locale)

  return (
    <Document title={`CV — ${cv.name}`} author={cv.name}>
      <Page size="A4" style={s.page}>

        {/* Cabecera */}
        <Text style={s.name}>{cv.name}</Text>
        <Text style={s.subtitle}>{cv.title}</Text>
        <View style={s.contactRow}>
          {cv.contacts.map((item) => (
            <Text key={item} style={s.contactItem}>{item}</Text>
          ))}
        </View>

        <View style={s.divider} />

        {/* Perfil */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>{cv.labels.profile.toUpperCase()}</Text>
          <Text style={s.bodyText}>{cv.profile}</Text>
        </View>

        {/* Habilidades */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>{cv.labels.skills.toUpperCase()}</Text>
          {cv.skills.map(([label, value]) => (
            <View key={label} style={s.skillRow}>
              <Text style={s.skillLabel}>{label}</Text>
              <Text style={s.skillValue}>{value}</Text>
            </View>
          ))}
        </View>

        {/* Experiencia */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>{cv.labels.experience.toUpperCase()}</Text>
          {cv.experiences.map((exp) => (
            <View key={exp.company} style={s.expBlock}>
              <View style={s.expHeader}>
                <Text style={s.expCompany}>{exp.company}</Text>
                <Text style={s.expPeriod}>{exp.period}</Text>
              </View>
              <Text style={s.expRole}>{exp.role}</Text>
              {exp.bullets.map((b) => (
                <Bullet key={b} text={b} />
              ))}
            </View>
          ))}
        </View>

        {/* Proyectos */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>{cv.labels.projects.toUpperCase()}</Text>
          {cv.projects.map((p) => (
            <View key={p.name} style={s.projectBlock}>
              <View style={s.projectHeader}>
                <Text style={s.projectName}>{p.name}</Text>
                {p.link ? <Text style={s.projectLink}>{p.link}</Text> : null}
              </View>
              <Text style={s.projectDesc}>{p.desc}</Text>
              <Text style={s.projectStack}>{p.stack}</Text>
            </View>
          ))}
        </View>

        {/* Educación + Certificaciones */}
        <View style={s.twoCol}>
          <View style={s.col}>
            <Text style={s.sectionTitle}>{cv.labels.education.toUpperCase()}</Text>
            {cv.education.map((edu) => (
              <View key={edu.degree} style={s.entryBlock}>
                <View style={s.entryHeader}>
                  <Text style={s.entryTitle}>{edu.degree}</Text>
                  <Text style={s.entryPeriod}>{edu.period}</Text>
                </View>
                <Text style={s.entrySub}>{edu.institution}</Text>
              </View>
            ))}
          </View>

          <View style={s.colLast}>
            <Text style={s.sectionTitle}>{cv.labels.certifications.toUpperCase()}</Text>
            {cv.certifications.map((cert) => (
              <View key={cert.name} style={s.entryBlock}>
                <Text style={s.entryTitle}>{cert.name}</Text>
                <Text style={s.entrySub}>{cert.sub}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Idiomas */}
        <View>
          <Text style={s.sectionTitle}>{cv.labels.languages.toUpperCase()}</Text>
          <Text style={s.bodyText}>{cv.languages}</Text>
        </View>

      </Page>
    </Document>
  )
}
