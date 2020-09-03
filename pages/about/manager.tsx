import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";
import Cover from "../../components/Cover";
import Paragraph from "../../components/Paragraph";
import Heading from "../../components/Heading";
import { atLeastMedium } from "../../utils/breakpoints";
import ExternalLinks from "../../components/ExternalLinks";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import ThematicBreak from "../../components/ThematicBreak";

const Manager: NextPage = () => (
  <>
    <main role="main">
      <Head>
        <meta
          name="description"
          content="John Apostol is a lifelong learner and software person based in Austin, TX."
        />
        <title>About John Apostol</title>
        <link rel="canonical" href="https://johnapostol.com/about/manager" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://johnapostol.com/about/manager"
        />
        <meta
          property="og:image"
          content={require("../../public/static/me.jpg?size=320")}
        />
        <meta property="og:title" content="About John Apostol" />
        <meta
          property="og:description"
          content="John Apostol is a lifelong learner and software person based in Austin, TX."
        />
        <meta name="twitter:site" content="@johnapost" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Cover />
      <div className="grid">
        <ExternalLinks />
        <Heading level={1}>Hello there, I&rsquo;m John!</Heading>
        <Paragraph>
          I&rsquo;m happy to be working with you, as your manager. :)
        </Paragraph>
        <Paragraph>
          I wanted to give you a headstart on who I am and how I work. This page
          isn&rsquo;t meant to replace our future conversations.
        </Paragraph>
        <Paragraph>
          We will talk &mdash; a lot &mdash; and we will learn a lot more about
          each other as we work together to build things. I genuinely look
          forward to discovering our differences and similarities.
        </Paragraph>
        <Paragraph>
          I encourage you to read this page fully and come to me with questions
          or concerns. It&rsquo;s better to ask than to wonder.
        </Paragraph>
        <List>
          <ListItem>
            <a href="#my-principles">What are my principles?</a>
          </ListItem>
          <ListItem>
            <a href="#my-job">What is my job?</a>
          </ListItem>
          <ListItem>
            <a href="#expect-me">What you should expect from me</a>
          </ListItem>
          <ListItem>
            <a href="#expect-you">What I expect from you</a>
          </ListItem>
        </List>
        <ThematicBreak />
        <Heading level={2}>
          <span key="1" id="my-principles">
            What are my principles?
          </span>
        </Heading>
        <Paragraph>
          <strong>I&rsquo;ve found mutual success working with..</strong>
        </Paragraph>
        <List>
          <ListItem>Curious learners</ListItem>
          <ListItem>Honest, good-natured people</ListItem>
          <ListItem>Thoughtful collaborators</ListItem>
        </List>
        <Paragraph>
          How do I define these things? That&rsquo;s worth a discussion so
          please bring it up in one of our 1:1 meetings. I&rsquo;d be very happy
          to explain.
        </Paragraph>
        <Paragraph>
          Some examples that come to mind; developers who proactively review
          code for their own benefit. Teammates who believe that quality is
          owned by everyone. Colleagues those who respect their own time as well
          as others.
        </Paragraph>
        <Paragraph>
          <strong>Engineering</strong>
        </Paragraph>
        <Paragraph>
          Early in my career, I coveted the &rsquo;engineer&rsquo; title. I
          thought it brought validation to what I was doing. Now, I understand
          that it was vanity at best. At worst, it distanced the act of writing
          code from the value the code actually brings.
        </Paragraph>
        <Paragraph>
          Engineers/developers/coders/programmers should strive to create value.
          All of our work should create value. We should not build things just
          because they can be built. Also, it&rsquo;s totally fine if you
          don&rsquo;t agree with me on the title thing.
        </Paragraph>
        <Paragraph>
          I strive for my team to build the right-sized solutions &mdash; using
          small changes by default. Our code should be predictable to avoid
          headaches. We should be opportunistic in our solutions.
        </Paragraph>
        <ThematicBreak />
        <Heading level={2}>
          <span key="1" id="my-job">
            What is my job?
          </span>
        </Heading>
        <Paragraph>
          <strong>My main job is to nurture and protect your talent.</strong>
        </Paragraph>
        <Paragraph>
          We&rsquo;re working together for a good reason. I sincerely believe we
          can build great things together. I want to invest in your success for
          our mutual benefit.
        </Paragraph>
        <Paragraph>
          <strong>
            My second job is to make sure we&rsquo;re working on the right
            things at the right time.
          </strong>
        </Paragraph>
        <Paragraph>
          Other people will see this as my only job. I don&rsquo;t want you to
          think that, though.
        </Paragraph>
        <Paragraph>
          &ldquo;The right things at the right time&rdquo; is not possible to
          pin down. I&rsquo;m just one human. I want your input and insight to
          help me get this right.
        </Paragraph>
        <Paragraph>
          <strong>
            My third job is to look for opportunities on the horizon.
          </strong>
        </Paragraph>
        <Paragraph>
          When I feel we are solid on the first two points, I will default to
          looking ahead for the benefit of our team, engineering, and the
          company as a whole. This can take a lot of different forms.
        </Paragraph>
        <Paragraph>
          I would love to hear your ideas as you will undoubtedly find
          opportunities we should consider.
        </Paragraph>
        <ThematicBreak />
        <Heading level={2}>
          <span key="1" id="expect-me">
            What you should expect from me
          </span>
        </Heading>
        <Paragraph>
          <strong>Regular 1:1s</strong>
        </Paragraph>
        <Paragraph>
          We will have regular 1:1s. These will be on our calendar at a cadence
          that you benefit from. You own these meetings!
        </Paragraph>
        <Paragraph>
          I encourage you to have some topics in order get the most out of these
          meetings. I don&rsquo;t want this to be a status update. That&rsquo;s
          a disservice to your needs.
        </Paragraph>
        <Paragraph>
          You dictate the cadence, the time of day, and even the location. Some
          people like to end their week with 1:1s. Some people like to have
          these in the morning, while we sip coffee or have tea.
        </Paragraph>
        <Paragraph>
          There comes a time when one of us needs to adjust the meeting so that
          we can accomdate another meeting. I will try not to do this, but you
          definitely can.
        </Paragraph>
        <Paragraph>In our 1:1s. I will..</Paragraph>
        <List>
          <ListItem>Be honest with you</ListItem>
          <ListItem>Be as transparent as I should be</ListItem>
          <ListItem>Ask for your feedback, continually</ListItem>
        </List>
        <Paragraph>
          I&rsquo;ve come to realize that 1:1 meetings recharge my battery. Know
          that I look forward to talking with you each time we meet.
        </Paragraph>
        <Paragraph>
          <strong>Communication style</strong>
        </Paragraph>
        <Paragraph>
          I tend to overcommunicate, especially on important things. I
          don&rsquo;t like to leave information to chance. If I mean for you to
          know something, I will do my best to make sure you know it.
        </Paragraph>
        <Paragraph>
          That said, I will try to accomodate your communication style. I never
          want to overwhelm you. I believe we all need space and time to work.
        </Paragraph>
        <Paragraph>
          I also believe in asynchronous communication. I treat email and Slack
          as asynchronous, except for urgent incidents.
        </Paragraph>
        <List>
          <ListItem>
            Email - I use email for announcements and non-urgent matters. I
            check my email twice a day.
          </ListItem>
          <ListItem>
            Slack - I use Slack for more timely items. My Slack status reflects
            my working status. I respect and use the DND feature.
          </ListItem>
          <ListItem>
            In person or desk drop-by - I&rsquo;m prone to inspiration. If you
            aren&rsquo;t in deep focus or thought, I may ask for your opinion.
            Stop me if you&rsquo;re busy!
          </ListItem>
        </List>
        <Paragraph>
          <strong>Calendar usage</strong>
        </Paragraph>
        <Paragraph>
          <strong>Vacations</strong>
        </Paragraph>
        <ThematicBreak />
        <Heading level={2}>
          <span key="1" id="expect-you">
            What I expect from you
          </span>
        </Heading>
      </div>
    </main>
    <Footer />
    <style jsx>{`
      main {
        font-family: "Merriweather", serif;
        margin: 0 0 6rem;
        min-width: 320px;
        overflow-x: hidden;
      }

      @media ${atLeastMedium} {
        .grid {
          display: grid;
          grid-template-columns: 1fr 740px 1fr;
        }

        .grid:before {
          content: "";
        }
      }
    `}</style>
  </>
);

export default Manager;
