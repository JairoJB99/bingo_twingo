const core = require("@actions/core");
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: core.getInput('author'),
    pass: core.getInput('password')
  }
});


const options = {
    from: core.getInput('author'),
    to: core.getInput('recipients_mail'),
    subject: 'Resultado del workflow ejecutado',
    text: `Se ha realizado un push en la rama ${core.getInput('branch')} que ha provocado la ejecución del workflow ${core.getInput('workflow')} con los siguientes resultados:
    - syntax_check_job: ${core.getInput('SYNTAX_STATUS')}
    - test_execution_job: ${core.getInput('EXECUTION_STATUS')}
    - build_statics_job: ${core.getInput('BUILD_STATUS')}
    - deploy_job: ${core.getInput('DEPLOY_STATUS')}`
  };

  transporter.sendMail(options, function(error, info){
    if (error) {
      core.setFailed(error);
    } else {
      core.setOutput("Response: ", info.response);
    }
  });