'use strict';

const { Controller } = require('egg');
const mongo = require('../utils/mongo');

class ProjectController extends Controller {
  // 获取项目/组件模板
  async getTemplate() {
    const { ctx } = this;
    const data = await mongo().query('project');
    console.log('project:', data);
    ctx.body = data;
  }
}

module.exports = ProjectController;
