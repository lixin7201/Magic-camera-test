/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import { getTranslations } from 'next-intl/server';
import type { Locale } from "@/i18n.config";

export async function generateMetadata({
  params
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'seo' });

  return {
    title: t('refund.title'),
    description: t('refund.description'),
    openGraph: {
      images: [t('refund.ogImage')],
    },
  };
}

export default function RefundPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">Magic Camera 退款政策</h1>

        <p className="text-muted-foreground mb-8">
          生效日期：2024年11月14日
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. 产品服务描述</h2>
          <p>
            Magic Camera 提供基于积分制的 AI 图像生成服务，包括对话、图像生成、视频生成等 AI 功能。用户通过购买积分包或订阅计划获得积分，用于兑换各项 AI 服务。
          </p>
          <p>
            本服务采用预付费积分制模式，所有积分一经购买即视为已消费服务，除系统级故障外不提供退款。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. 严格退款政策</h2>

          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-6">
            <h3 className="text-xl font-semibold mb-3 text-red-800 dark:text-red-300">唯一退款条件：系统级服务崩溃</h3>
            <p className="text-red-700 dark:text-red-300 mb-2">
              仅当 Magic Camera 平台发生系统级故障，导致服务完全不可用且持续时间超过 4 小时时，用户可申请退款。
            </p>
            <p className="text-red-600 dark:text-red-400 text-sm">
              * 个别功能异常、AI 生成效果不满意、网络连接问题等不属于系统级故障范畴
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-3">系统级故障定义：</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>完全服务中断：</strong>所有用户无法访问平台核心功能</li>
            <li><strong>持续时间：</strong>连续服务中断超过 4 小时</li>
            <li><strong>官方确认：</strong>经 Magic Camera 技术团队确认的系统故障</li>
            <li><strong>影响范围：</strong>影响全体用户或特定区域大规模用户群体</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. 积分消费不可退款政策</h2>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-6">
            <h3 className="text-lg font-semibold mb-2 text-yellow-800 dark:text-yellow-300">重要声明</h3>
            <p className="text-yellow-700 dark:text-yellow-300">
              所有已购买的积分，无论是否已使用，均不可退款。积分一经购买即视为已消费服务。
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-3">不可退款情形包括但不限于：</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>已使用积分：</strong>用于 AI 对话、图像生成、视频生成等服务消耗的积分</li>
            <li><strong>未使用积分：</strong>账户中剩余的未使用积分余额</li>
            <li><strong>订阅计划：</strong>月度或年度订阅计划费用（除非符合系统故障条件）</li>
            <li><strong>一次性积分包：</strong>所有一次性购买的积分包产品</li>
            <li><strong>AI 生成结果：</strong>对 AI 生成内容质量、风格、效果不满意</li>
            <li><strong>功能变更：</strong>平台功能更新、调整或下架</li>
            <li><strong>个人原因：</strong>用户个人原因不再需要服务</li>
            <li><strong>第三方问题：</strong>支付平台、银行或第三方服务问题</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. 退款申请流程与证据要求</h2>

          <h3 className="text-xl font-semibold mb-3">申请条件验证：</h3>
          <p className="mb-4">
            用户必须提供充分证据证明符合系统级故障退款条件，包括但不限于：
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">必需证据材料：</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>服务中断期间的屏幕截图（显示时间戳）</li>
              <li>网络连接测试报告（证明非本地网络问题）</li>
              <li>官方服务状态页面截图（如有）</li>
              <li>多个不同时间段的服务不可用证明</li>
              <li>其他用户同期服务中断证明（论坛、社群等）</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-3">申请流程：</h3>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>联系客服：</strong>
              发送邮件至 support@magiccamera.app，主题格式："系统故障退款申请 - [用户邮箱] - [故障日期]"
            </li>
            <li>
              <strong>提供信息：</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Magic Camera 账户邮箱地址</li>
                <li>购买订单号或交易 ID</li>
                <li>服务中断的具体时间段（精确到小时）</li>
                <li>详细的故障描述和影响</li>
                <li>所有相关证据材料附件</li>
              </ul>
            </li>
            <li>
              <strong>技术验证：</strong>
              Magic Camera 技术团队将验证系统故障记录
            </li>
            <li>
              <strong>审核决定：</strong>
              基于技术验证结果和证据材料做出退款决定
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. 7天申请期限</h2>

          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-4">
            <h3 className="text-lg font-semibold mb-2 text-red-800 dark:text-red-300">严格时限要求</h3>
            <p className="text-red-700 dark:text-red-300">
              退款申请必须在系统故障发生后的 7 个自然日内提交，逾期申请将不予受理。
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-3">时限计算规则：</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>起始时间：</strong>系统故障恢复后 24 小时开始计算</li>
            <li><strong>截止时间：</strong>第 7 个自然日 23:59:59（UTC 时间）</li>
            <li><strong>申请时间：</strong>以客服收到完整申请材料的邮件时间为准</li>
            <li><strong>补充材料：</strong>如需补充证据，需在收到通知后 48 小时内提供</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. 退款处理</h2>

          <h3 className="text-xl font-semibold mb-3">审核时间：</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>初步审核：收到完整申请后 3 个工作日内</li>
            <li>技术验证：5-7 个工作日</li>
            <li>最终决定：10 个工作日内</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-4">退款方式：</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>原支付方式：</strong>退款将退回至原支付渠道</li>
            <li><strong>处理时间：</strong>银行处理需 5-15 个工作日</li>
            <li><strong>部分退款：</strong>按受影响的服务时间比例计算</li>
            <li><strong>货币汇率：</strong>按退款处理时的汇率计算</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. 拒绝退款的情形</h2>

          <p className="mb-4">
            Magic Camera 保留拒绝退款申请的权利，包括但不限于以下情形：
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>未能提供充分证据证明系统级故障</li>
            <li>服务中断时间少于 4 小时</li>
            <li>超过 7 天申请期限</li>
            <li>提供虚假或误导性信息</li>
            <li>重复提交相同申请</li>
            <li>违反服务条款的账户</li>
            <li>涉嫌恶意退款或欺诈行为</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. 联系信息</h2>

          <p>
            退款申请专用联系方式：
          </p>
          <ul className="list-none space-y-2 mt-4">
            <li><strong>申请邮箱：</strong> support@magiccamera.app</li>
            <li><strong>邮件主题：</strong> 系统故障退款申请 - [用户邮箱] - [故障日期]</li>
            <li><strong>响应时间：</strong> 3 个工作日内</li>
            <li><strong>处理时间：</strong> 10 个工作日内</li>
          </ul>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <strong>重要提醒：</strong> 在提交退款申请前，请确保您已充分理解本退款政策。我们建议用户先联系客服寻求技术支持，大多数问题都可以通过技术协助解决，无需申请退款。
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. 政策变更</h2>
          <p>
            Magic Camera 保留随时修改本退款政策的权利。政策变更将在本页面公布，并适用于变更生效后的所有新购买。对于政策变更前的购买，仍按原政策执行。
          </p>
          <p className="mt-2">
            重大政策变更将通过邮件通知用户，建议用户定期查看本页面了解最新政策。
          </p>
        </section>
      </div>
    </div>
  );
}
