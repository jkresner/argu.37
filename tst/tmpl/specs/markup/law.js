const {mup_law} = require("../../../../pl8/fn/render")

module.exports = function() {

const strip = html => html.replace(/\n<li/g,"<li")
const check = key => strip(mup_law(FIXTURE.laws[key].body))

IT("SM15__79", x => {
  expect(check('SM15__79')).to.inc(`<ol><li><p>An OC must ...:</p>
<ul><li>maintain in good condition ..., and</li><li>meet other recurrent expenses.</li>
</ul>
<p><strong>Note.</strong> Recurrent expenses would include ... relating to maintenance...</p>
</li><li><p>An OC must, ... estimate... :</p>
<ul><li>for painting, and</li><li>to renew fixtures, and</li><li>to meet other expenses of a capital nature.</li>
</ul>
<p><strong>Note.</strong> Expenses of a capital nature would include ..., guttering or fences and the like.</p>
</li><li><p>When estimating amounts needed to be credited to the administrative fund or the capital works fund ..., and take into account, ... existing financial situation ... .</p>
</li>
</ol>`)
  DONE()
})


IT("SM15__86", x => {
  expect(check('SM15__86')).starts(`<ol><li><p>Tribunal may order owner to pay a contribution payable under Act not paid 1 month after due, with interest and reasonable expenses incurred recovering.</p>
</li><li><p>may order 1) only:</p>
<ul><li>on the application of OC, and</li><li>if proceedings between OC and owner</li>
</ul>
<p>(2A)  OC, without an order under this section, recover as a debt in a court of competent jurisdiction, a contribution not paid at the end of 1 month after it becomes due and payable, together with any interest payable on that unpaid contribution and the reasonable expenses of the owners corporation incurred in recovering those amounts.</p>
<p><strong>Note.</strong> Clause 6 of Sch 4 Civil and Administrative Tribunal Act 2013 provides for the transfer of proceedings between the Tribunal and a court which has jurisdiction (and vice versa) if the parties to the proceedings agree or if the Tribunal or court of its own motion or on the application of a party so directs.</p>
</li><li><p>Interest paid or recovered forms part of the fund to which the relevant contribution belongs.</p>
</li><li><p>An owners corporation must not take action to recover an amount under this section unless it has given the person against whom the action is to be taken at least 21 days notice.</p>
</li>
</ol>`)
  DONE()
})

IT("SM15__88", x => {
  expect(check('SM15__88')).starts(`<p>If a contribution that is the subject of an order by the Tribunal under this Division has been wholly or partly paid:</p>
<ul><li>an order to pay more has effect as if the owners corporation had decided to levy a contribution equal to the difference, and</li><li>an order to pay less imposes a duty on the owners corporation to refund the difference.</li>
</ul>`)
  DONE()
})


IT.only("SM16__18", x => {
  expect(check('SM16__18')).starts(`<ol><li>A payment plan for overdue contributions to be in writing and contain:<ul><li>name of lot owner and title details of lot,</li><li>address for service,</li><li>amount of overdue contributions,</li><li>amount of interest payable for the overdue contributions and the way calculated,</li><li>schedule of payments for amounts owing and period plan applies,</li><li>manner payments are to be made,</li><li>contact details of committee or managing agent responsible for matters in relation plan,</li><li>statement further plan may be agreed by resolution,</li><li>statement payment plan does not limit OC to take action to recover amount of the unpaid contributions.</li>
</ul>
</li><li>SC must, give owner statement each calendar month of the plan that sets out payments made and owing.</li>
</ol>`)
  DONE()
})

}
