/* eslint-disable no-useless-concat */
import excel from 'exceljs';
import Toolbox from './toolbox';

const {
  errorResponse,
} = Toolbox;


const ExcelUtil = {
  /**
   * download activitylogger sheet
   * @param {object} res - logs to dowload
   * @param {Array} logs - logs to dowload
   * @returns {Promise<boolean>} - Returns true if mail is sent, false if not
   * @memberof ExcelUtil
   */
  async downloadLogs(res, logs) {
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet(`Inventory Acitivity Logs ${Date.now()}`);

    worksheet.columns = [
      { header: 'First Name', key: 'firstName', width: 20 },
      { header: 'Last Name', key: 'lastName', width: 20 },
      { header: 'Email', key: 'email', width: 50 },
      { header: 'Action', key: 'actionType', width: 40 },
      { header: 'Description', key: 'activity', width: 60 },
      { header: 'Time', key: 'createdAt', width: 40 },
    ];

    try {
      worksheet.addRows(logs);
      res.setHeader(
        'Content-Type',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      );
      res.setHeader(
        'Content-Disposition',
        'attachment; filename=' + 'logs.xlsx'
      );
      await workbook.xlsx.write(res);
    } catch (error) {
      errorResponse(res, {});
    }
  },
};

export default ExcelUtil;
