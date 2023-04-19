 import data from "../../submissionData.json"; // do not create this file
 import "cypress-localstorage-commands";
 //let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];

const Data = [
  {
    name: "S",
    desc: "D",
    type: "CODING",
    course: "JS101",
    sprint: "sprint-1",
    schedule: "2009-12-12",
  },
  {
    name: "S1",
    desc: "D1",
    type: "CODING",
    course: "JS101",
    sprint: "sprint-2",
    schedule: "2009-12-12",
  },
  {
    name: "S2",
    desc: "D2",
    type: "CODING",
    course: "JS101",
    sprint: "sprint-2",
    schedule: "2009-12-12",
  },
  {
    name: "S3",
    desc: "D3",
    type: "DSA",
    course: "DSA301",
    sprint: "sprint-3",
    schedule: "2009-12-12",
  },
  {
    name: "S4",
    desc: "D4",
    type: "DSA",
    course: "DSA301",
    sprint: "sprint-4",
    schedule: "2009-12-12",
  },
  {
    name: "S5",
    desc: "D5",
    type: "DSA",
    course: "DSA301",
    sprint: "sprint-4",
    schedule: "2009-12-12",
  },
];
data.map(({ submission_link: url, id }) => {
  describe("Test", function () {
    let acc_score = 1;
    function FormSubmit(data, LSLen) {
      cy.get("#name").clear().type(data.name);
      cy.get("#desc").clear().type(data.desc);
      cy.get("#type").select(data.type);
      cy.get("#course").select(data.course);
      cy.get("#sprint").select(data.sprint);
      cy.get("#schedule").clear().type(data.schedule);
      cy.get("form")
        .submit()
        .should(() => {
          expect(
            JSON.parse(localStorage.getItem("assignments")).length
          ).to.equal(LSLen);
        });
    }
    function CheckBoard(data, index, id) {
      cy.get(`#${id}>div`).eq(index).contains(data.name);
      cy.get(`#${id}>div`).eq(index).contains(data.desc);
      cy.get(`#${id}>div`).eq(index).contains(data.type);
      cy.get(`#${id}>div`).eq(index).contains(data.course);
      cy.get(`#${id}>div`).eq(index).contains(data.schedule);
    }
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      beforeEach(() => {
        // cy.restoreLocalStorage();
      });
      afterEach(() => {
        cy.saveLocalStorage();
      });
      it("Form Submit Storing Data is LS", () => {
        cy.visit(url);
        expect(localStorage.getItem("assignments")).to.eq(null);
        FormSubmit(Data[0], 1);
        cy.then(() => (acc_score += 1));
      }); // Score:- 1
      it("Check the LS Data after mutiple form submits", () => {
        cy.restoreLocalStorage();
        for (let i = 1; i < Data.length; i++) {
          FormSubmit(Data[i], i + 1);
        }
        cy.then(() => {
          acc_score += 1;
        });
      }); // Score:- 1
      it("By Default only the JS101 Cards are showing in appropriate Sprint Column", () => {
        cy.restoreLocalStorage();
        cy.visit(`${url}dashboard.html`);
        CheckBoard(Data[0], 0, Data[0].sprint);
        CheckBoard(Data[1], 0, Data[1].sprint);
        CheckBoard(Data[2], 1, Data[2].sprint);

        cy.then(() => {
          acc_score += 3;
        });
      }); // Score:- 3
      it(`Check the flex value and the responsiveness of the assignment Columns`, () => {
        cy.restoreLocalStorage();
        cy.get(".assignments").should("have.css", "display", "flex");
        cy.viewport(800, 800);
        cy.get(".assignments").should("have.css", "flex-direction", "column");
        cy.then(() => {
          acc_score += 1;
        });
      }); // Score:- 1
      it("Check the board after changing the Sprint", () => {
        cy.restoreLocalStorage();
        cy.get("#sprint-1>div").eq(0).children("select").select("sprint-3");
        CheckBoard(Data[0], 0, "sprint-3");
        cy.get("#sprint-1>div").should("have.length", 0);

        cy.get("#sprint-2").children("div").should("have.length", 2);
        cy.get("#sprint-2>div").eq(1).children("select").select("sprint-1");
        CheckBoard(Data[2], 0, "sprint-1");
        cy.get("#sprint-1").children("div").should("have.length", 1);
        cy.get("#sprint-2").children("div").should("have.length", 1);
        cy.then(() => {
          acc_score += 3;
        });
      }); // Score:-3

      it(`Change the course and check the board`, () => {
        cy.restoreLocalStorage();
        cy.get("#course").select("DSA301");
        CheckBoard(Data[3], 0, Data[3].sprint);
        CheckBoard(Data[4], 0, Data[4].sprint);
        CheckBoard(Data[5], 1, Data[5].sprint);
        cy.then(() => {
          acc_score += 3;
        });
      }); //3

      it(`Check the deleting`, () => {
        cy.visit(`${url}index.html`);
        for (let i = 0; i < Data.length; i++) {
          FormSubmit(Data[i], i + 1);
        }
        cy.visit(`${url}dashboard.html`);
        cy.get("#sprint-1>div").eq(0).children("button").click();
        CheckBoard(Data[1], 0, Data[1].sprint);
        CheckBoard(Data[2], 1, Data[2].sprint);
        cy.get("#sprint-1>div").should("have.length", 0);
        cy.then(() => {
          acc_score += 2;
        });
      }); // 2
    }

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
