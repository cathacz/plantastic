import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  View,
  Image,
  Linking,
} from "react-native";

import colors from "../../config/colors";

import Today from "../1_MainScreens/1_Today";

import StyleMain from "../../styles/StyleMain";
import StylePlants from "../../styles/StylePlants";

const Conditions = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.h2}> § 1 Geltungsbereich </Text>
          <Text style={styles.p}>
            (1) Die nachfolgenden Bedingungen gelten für die Nutzung des Name
            Ihrer Domain – im folgenden “Unsere Webseite” genannt – Forums. Für
            die Nutzung des Forums ist wichtig, dass Sie als Nutzer/Nutzerin die
            nachfolgenden Forenregeln bzw. –bedingungen akzeptieren. Die
            Registrierung und Benutzung unseres Forums ist kostenlos. (2) Mit
            der Registrierung sind Sie mit den Nutzungsbedingungen unserer
            Webseite einverstanden. Durch Ihr Einverständnis garantieren Sie
            uns, dass Sie keine Beiträge erstellen werden, die gegen die
            Nutzungsbedingung verstoßen. (3) Durch das Benutzen von unserer
            Webseite kommt kein Vertrag zwischen den Nutzern/Nutzerinnen und uns
            zustande.
          </Text>
          <Text style={styles.h2}>
            § 2 Pflichten als Forum-Nutzer/Forum-Nutzerinnen{" "}
          </Text>
          <Text style={styles.p}>
            (1) Einer Ihrer Pflichten als Nutzer/Nutzerin ist es, dass Sie keine
            Beiträge veröffentlichen, die gegen diese Forenregeln, gegen die
            guten Sitten oder sonst gegen geltendes deutsches Recht verstoßen.{" "}
          </Text>
          <Text style={styles.h3}>
            Folgende Punkte sind Ihnen nicht genehmigt:
          </Text>
          <Text style={styles.p}>
            Folgende Punkte sind Ihnen nicht genehmigt: 1. Inhalte zu
            veröffentlichen, die unwahr sind und deren Veröffentlichung einen
            Straftatbestand oder eine Ordnungswidrigkeit erfüllt, 2. Versendung
            von Spam über das Forum an andere Forum-Nutzer/Form-Nutzerin, 3.
            Verwendung von gesetzlich durch Urheber- und Markenrecht geschützte
            Inhalte ohne rechtmäßige Berechtigung (z.B. Pressemitteilungen
            etc.), 4. Handlungen, die wettbewerbswidrig sind, 5. mehrfache
            Einstellung von Themen ins Forum (sogenannte Doppelpostings), 6.
            eigene Werbung, folglich Schleichwerbung, zu betreiben und 7.
            Inhalte zu veröffentlichen, die beleidigend, rassistisch,
            diskriminierend oder pornographische Elemente aufweisen gegenüber
            anderen Nutzern/Nutzerinnen und der Allgemeinheit. Ihre Pflicht als
            Forum-Nutzer/ Forum-Nutzerin ist es, auf § 2 Abs. 1 Nr. 1-7 dieser
            Nutzungsbedingung, vor der Veröffentlichung Ihres Beitrages im Forum
            zu beachten und zu überprüfen, ob Sie sich an diese Punkte gehalten
            haben. (2) Sollten Sie gegen § 2 Abs. 1 Nr. 1-7 dieser
            Nutzungsbedingung verstoßen, behalten wir uns das Recht vor, gegen
            Sie folgende Schritte vorzunehmen: 1. Ihre eingestellten Beiträge zu
            löschen und diese abzuändern, 2. Verbot weiterhin im Forum Beiträge
            zu verfassen und 3. Sperrung des Zugangs als Nutzer/Nutzerin. (3)
            Haben Sie als Forum-Nutzer/Forum-Nutzerin nicht die Forenregeln
            beachtet und sind hierdurch mögliche Rechtsverstöße entstanden, die
            durch Ihre eingestellten Inhalte in unserem Forum entstanden sind
            (Pflichtverletzung), verpflichten Sie sich als Nutzer/Nutzerin, uns
            von jeglichen Ansprüchen, auch den Schadenersatzansprüchen,
            freizustellen und diesen die Kosten zu ersetzen. Zudem ist der
            Nutzer/die Nutzerin verpflichtet uns, bei Schadenersatzansprüchen
            hinsichtlich der Abwehr des durch ihn entstandenen Rechtsverstoßes
            (Pflichtverletzung s.o.), zu unterstützen und die Kosten einer
            angemessenen Rechtsverteidigung für uns zu tragen. (4) Durch Ihr
            Einverständnis garantieren Sie uns, dass Sie keine Beträge erstellen
            werden, die gegen die Nutzungsbedingung verstoßen. Entsprechendes
            gilt auch für das Setzen von externen Links und die Signaturen.
          </Text>
          <Text style={styles.h2}>§ 3 Übertragung von Nutzungsrechten</Text>
          <Text style={styles.p}>
            Sie, als Forum-Nutzer/Forum-Nutzerin haben die alleinige
            Verantwortung des Urheberrechts i.S.d. Urhebergesetzes bei
            Veröffentlichung von Beiträgen und Themen im Forum zu beachten. Als
            Nutzer/Nutzerin räumen Sie lediglich uns mit Veröffentlichung Ihres
            Beitrages auf deren Homepage das Recht ein, den Beitrag dauerhaft
            zum Abruf bereitzustellen. Ferner hat unser Team das Recht, Ihre
            Themen und Beiträge zu löschen, zu bearbeiten und innerhalb seiner
            Homepage zu verschieben, um diese mit anderen Inhalten zu verknüpfen
            oder zu schließen.
          </Text>
          <Text style={styles.h2}>§ 4 Haftungsbeschränkung </Text>
          <Text style={styles.p}>
            (1) Wir übernehmen keinerlei Gewähr für die im Forum
            veröffentlichten und eingestellten Beiträge, Themen, externen Links
            und die daraus resultierenden Inhalte, insbesondere nicht für deren
            Richtigkeit, Vollständigkeit und Aktualität. Wir sind auch nicht
            verpflichtet, permanent die übermittelten und gespeicherten Beiträge
            der Nutzer/Nutzerinnen zu überwachen oder nach den Umständen zu
            erforschen, ob sie auf einen rechtswidrigen Inhalt hinweisen. Wir
            haften grundsätzlich nur im Falle einer vorsätzlichen oder grob
            fahrlässigen Pflichtverletzung. (2) Wir weisen ausdrücklich darauf
            hin, dass die juristischen Beiträge und Diskussionen im Forum
            vollkommen unverbindlich sind. Die Nutzung der Beiträge und deren
            Verwertung erfolgt auf Ihre eigene Gefahr. (3) Bei Werbeschaltungen
            übernehmen wir keine Haftung für den Inhalt und die Richtigkeit. Für
            den Inhalt der Werbeanzeigen ist der jeweilige Autor einzig und
            allein verantwortlich; gleiches gilt für den Inhalt der beworbenen
            Webseite. Bei Darstellung der Werbeanzeige auf unserer Webseite ,
            sind wir nicht gleichzeitig mit dem rechtswidrigen Inhalt
            einverstanden. Daher liegt die Haftung ausschließlich bei dem
            Werbekunden. (4) Es ist wird nicht für einen ständigen
            unterbrechungsfreien Abruf der Webseite garantiert. Einer Haftung
            diesbezüglich wird hiermit ausdrücklich widersprochen. Auch bei
            großer Sorgfalt können Ausfallzeiten leider nicht ausgeschlossen
            werden.
          </Text>
          <Text style={styles.h2}>§ 5 Urheberrecht</Text>
          <Text style={styles.p}>
            Sämtliche Texte, Bilder und andere auf unserer Webseite
            veröffentlichten Informationen und Daten unterliegen – sofern nicht
            anders gekennzeichnet – dem Copyright unserer Seite. Jede Form von
            Wiedergabe und/oder Modifikation darf nur mit der schriftlichen
            Genehmigung durch uns erfolgen. Andersfalls behalten wir uns das
            Recht vor gerichtlich gegen diese Rechtsverletzung vorzugehen. Alle
            Kosten, die durch eine Rechtsverletzung seitens eines Benutzers
            verursacht werden, werden diesem in Rechnung gestellt.
          </Text>
          <Text style={styles.h2}>§ 6 Änderungsvorbehalt</Text>
          <Text style={styles.p}>
            Wir haben jederzeit das Recht die Nutzungsbedingungen zu ändern. Die
            Änderung wird dann per Forum-Eintrag auf der Webseite
            veröffentlicht.
          </Text>
          <Text style={styles.h2}>
            § 7 Kündigung und Laufzeit der Mitgliedschaft bei unserer Webseite
          </Text>
          <Text style={styles.p}>
            Die Laufzeit der Mitgliedschaft beginnt mit der Registrierung und
            mit dem Einverständnis unseren Nutzungsbedingungen und besteht auf
            eine unbestimmte Zeit. Die Mitgliedschaft kann jederzeit ohne Angabe
            von Kündigen fristlos gekündigt werden.
          </Text>
          <Text style={styles.h2}>§ 8 Salvatorische Klausel</Text>
          <Text style={styles.p}>
            Diese Forum-Nutzungsbedingung ist als Teil unserer Webseite zu
            betrachten, von dem aus auf diese Seite verwiesen wird. Sind
            einzelne Formulierungen dieser Forum-Nutzungsbedingung nicht mehr
            ganz oder nicht mehr vollständig konform mit der geltenden
            Rechtslage, so ist davon auszugehen, dass die übrigen Regelungen der
            Forum-Nutzungsbedingungen bestehen bleiben.
          </Text>
          <Text style={styles.pp}>
            Diese Nutzungsbedingungen wurden freundlicherweise von{" "}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL("https://jurarat.de/")}
            >
              jurarat.de
            </Text>{" "}
            zur Verfügung gestellt.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", backgroundColor: colors.white },
  wrapper: { margin: 25 },
  h1: {
    fontSize: 22,
    color: colors.sage,
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold",
  },
  h2: { fontSize: 18, color: colors.sage75, marginTop: 10, marginBottom: 10 },
  h3: {
    fontSize: 14,
    textDecorationLine: "underline",
    marginTop: 10,
    marginBottom: 10,
  },
  p: { fontSize: 14 },
  pp: { fontSize: 14, marginTop: 15 },
  link: { textDecorationLine: "underline" },
});

export default Conditions;
