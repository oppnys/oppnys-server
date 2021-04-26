'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
    // 获取项目/组件模板
    async index() {
        const { ctx } = this;
        ctx.body = 'hi oppnys!';
    }
}

module.exports = HomeController;
