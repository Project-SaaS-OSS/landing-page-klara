import { BarChart3, Building2, CalendarDays, GraduationCap, User, Users } from 'lucide-react';
import { useId } from 'react';

const FONT_FAMILY = 'Arial, Helvetica, sans-serif';
const ORBIT_CENTER = { x: 300, y: 248 };
const HUB = { x: 184, y: 186, width: 232, height: 122, radius: 31 };

const CONNECTORS = [
  {
    key: 'top',
    from: { x: ORBIT_CENTER.x, y: HUB.y },
    to: { x: ORBIT_CENTER.x, y: 144 },
    outerFill: '#D9CCFF',
    innerFill: '#E7E0FF',
  },
  {
    key: 'right',
    from: { x: HUB.x + HUB.width, y: ORBIT_CENTER.y },
    to: { x: 436, y: ORBIT_CENTER.y },
    outerFill: '#B8D6FF',
    innerFill: '#D6E7FF',
  },
  {
    key: 'bottom',
    from: { x: ORBIT_CENTER.x, y: HUB.y + HUB.height },
    to: { x: ORBIT_CENTER.x, y: 362 },
    outerFill: '#9DE5C3',
    innerFill: '#D3F8E5',
  },
  {
    key: 'left',
    from: { x: HUB.x, y: ORBIT_CENTER.y },
    to: { x: 164, y: ORBIT_CENTER.y },
    outerFill: '#FFC7D2',
    innerFill: '#FFE3EA',
  },
];

const FEATURE_CARDS = [
  {
    key: 'schedule',
    x: 224,
    y: 60,
    width: 162,
    height: 84,
    border: '#DACBFF',
    accent: '#7C3AED',
    title: 'Jadwal',
    subtitle: 'Manajemen Kelas',
    titleColor: '#31115C',
    subtitleColor: '#7C3AED',
    iconBackground: '#F1EAFE',
    iconGlow: '#E3D7FF',
    Icon: CalendarDays,
  },
  {
    key: 'students',
    x: 436,
    y: 206,
    width: 152,
    height: 84,
    border: '#B8D6FF',
    accent: '#2563EB',
    title: 'Siswa',
    subtitle: 'Data Peserta',
    titleColor: '#163B67',
    subtitleColor: '#2563EB',
    iconBackground: '#E8F2FF',
    iconGlow: '#CFE3FF',
    Icon: Users,
  },
  {
    key: 'reports',
    x: 224,
    y: 362,
    width: 162,
    height: 84,
    border: '#A3E5C8',
    accent: '#059669',
    title: 'Laporan',
    subtitle: 'Analitik & Insight',
    titleColor: '#0A513C',
    subtitleColor: '#059669',
    iconBackground: '#E2FAEF',
    iconGlow: '#C8F1DE',
    Icon: BarChart3,
  },
  {
    key: 'teachers',
    x: 12,
    y: 206,
    width: 152,
    height: 84,
    border: '#FFC7D2',
    accent: '#E11D48',
    title: 'Guru',
    subtitle: 'Profil Pengajar',
    titleColor: '#5D1022',
    subtitleColor: '#E11D48',
    iconBackground: '#FFEAF0',
    iconGlow: '#FFD9E3',
    Icon: User,
  },
];

const STAT_BADGES = [
  {
    key: 'institutions',
    x: 472,
    y: 78,
    width: 112,
    height: 62,
    accent: '#059669',
    title: '500+',
    subtitle: 'Lembaga Aktif',
    titleColor: '#0A513C',
    subtitleColor: '#7D8DA5',
    textX: 512,
    iconBackground: '#ECFDF5',
    Icon: Building2,
  },
  {
    key: 'studentsManaged',
    x: 20,
    y: 404,
    width: 122,
    height: 62,
    accent: '#2563EB',
    title: '50k+',
    subtitle: 'Siswa Dikelola',
    titleColor: '#163B67',
    subtitleColor: '#7D8DA5',
    textX: 62,
    iconBackground: '#EFF6FF',
    Icon: GraduationCap,
  },
];

export function HeroIllustration() {
  const illustrationId = useId().replace(/:/g, '');
  const cardShadowId = `${illustrationId}-card-shadow`;
  const badgeShadowId = `${illustrationId}-badge-shadow`;
  const hubShadowId = `${illustrationId}-hub-shadow`;
  const hubGradientId = `${illustrationId}-hub-gradient`;
  const cardFillId = `${illustrationId}-card-fill`;
  const badgeFillId = `${illustrationId}-badge-fill`;
  const orbitFillId = `${illustrationId}-orbit-fill`;
  const orbitRingId = `${illustrationId}-orbit-ring`;
  const violetOrbId = `${illustrationId}-violet-orb`;
  const mintOrbId = `${illustrationId}-mint-orb`;
  const hubGlowId = `${illustrationId}-hub-glow`;

  return (
    <div className='relative mx-auto w-full max-w-[560px] select-none sm:max-w-[620px]'>
      <div className='hero-illustration-float'>
        <svg
          className='h-auto w-full'
          viewBox='0 0 600 530'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          aria-hidden='true'
          focusable='false'
          preserveAspectRatio='xMidYMid meet'
        >
          <defs>
            <filter
              id={cardShadowId}
              x='-26%'
              y='-32%'
              width='154%'
              height='184%'
            >
              <feDropShadow
                dx='0'
                dy='14'
                stdDeviation='13'
                floodColor='#0F172A'
                floodOpacity='0.09'
              />
              <feDropShadow
                dx='0'
                dy='4'
                stdDeviation='4'
                floodColor='#1E3A8A'
                floodOpacity='0.04'
              />
            </filter>

            <filter
              id={badgeShadowId}
              x='-28%'
              y='-34%'
              width='156%'
              height='190%'
            >
              <feDropShadow
                dx='0'
                dy='10.5'
                stdDeviation='10'
                floodColor='#0F172A'
                floodOpacity='0.08'
              />
            </filter>

            <filter
              id={hubShadowId}
              x='-38%'
              y='-44%'
              width='178%'
              height='204%'
            >
              <feDropShadow
                dx='0'
                dy='34'
                stdDeviation='30'
                floodColor='#1D4ED8'
                floodOpacity='0.24'
              />
              <feDropShadow
                dx='0'
                dy='12'
                stdDeviation='12'
                floodColor='#0F172A'
                floodOpacity='0.12'
              />
            </filter>

            <linearGradient
              id={hubGradientId}
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
            >
              <stop
                offset='0%'
                stopColor='#3F8BFF'
              />
              <stop
                offset='58%'
                stopColor='#2D63EA'
              />
              <stop
                offset='100%'
                stopColor='#1F47B8'
              />
            </linearGradient>

            <linearGradient
              id={cardFillId}
              x1='0%'
              y1='0%'
              x2='0%'
              y2='100%'
            >
              <stop
                offset='0%'
                stopColor='#FFFFFF'
              />
              <stop
                offset='100%'
                stopColor='#F8FBFF'
              />
            </linearGradient>

            <linearGradient
              id={badgeFillId}
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
            >
              <stop
                offset='0%'
                stopColor='#FFFFFF'
              />
              <stop
                offset='100%'
                stopColor='#F8FAFC'
              />
            </linearGradient>

            <radialGradient
              id={orbitFillId}
              cx='50%'
              cy='46%'
              r='70%'
            >
              <stop
                offset='0%'
                stopColor='#FFFFFF'
                stopOpacity='0.94'
              />
              <stop
                offset='58%'
                stopColor='#EAF3FF'
                stopOpacity='0.84'
              />
              <stop
                offset='100%'
                stopColor='#EAF5FF'
                stopOpacity='0.24'
              />
            </radialGradient>

            <linearGradient
              id={orbitRingId}
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
            >
              <stop
                offset='0%'
                stopColor='#C5DAFF'
              />
              <stop
                offset='100%'
                stopColor='#B9E7D4'
              />
            </linearGradient>

            <radialGradient
              id={violetOrbId}
              cx='50%'
              cy='50%'
              r='50%'
            >
              <stop
                offset='0%'
                stopColor='#DDD6FE'
                stopOpacity='0.65'
              />
              <stop
                offset='100%'
                stopColor='#DDD6FE'
                stopOpacity='0'
              />
            </radialGradient>

            <radialGradient
              id={mintOrbId}
              cx='50%'
              cy='50%'
              r='50%'
            >
              <stop
                offset='0%'
                stopColor='#D1FAE5'
                stopOpacity='0.75'
              />
              <stop
                offset='100%'
                stopColor='#D1FAE5'
                stopOpacity='0'
              />
            </radialGradient>

            <radialGradient
              id={hubGlowId}
              cx='50%'
              cy='50%'
              r='52%'
            >
              <stop
                offset='0%'
                stopColor='#60A5FA'
                stopOpacity='0.34'
              />
              <stop
                offset='100%'
                stopColor='#60A5FA'
                stopOpacity='0'
              />
            </radialGradient>
          </defs>

          <ellipse
            cx='300'
            cy='258'
            rx='228'
            ry='212'
            fill={`
              url(#${orbitFillId})
            `}
          />
          <circle
            cx='500'
            cy='102'
            r='78'
            fill={`url(#${violetOrbId})`}
          />
          <circle
            cx='102'
            cy='430'
            r='76'
            fill={`url(#${mintOrbId})`}
          />

          <circle
            cx={ORBIT_CENTER.x}
            cy={ORBIT_CENTER.y}
            r='152'
            fill='none'
            stroke={`url(#${orbitRingId})`}
            strokeWidth='2.1'
            strokeDasharray='7.5 8'
            opacity='0.76'
          />
          <circle
            cx={ORBIT_CENTER.x}
            cy={ORBIT_CENTER.y}
            r='118'
            fill='none'
            stroke='#D4E5FF'
            strokeWidth='1.2'
            opacity='0.72'
          />

          {CONNECTORS.map(({ key, ...connector }) => (
            <Connector
              key={key}
              {...connector}
            />
          ))}

          <ellipse
            cx={ORBIT_CENTER.x}
            cy={ORBIT_CENTER.y + 12}
            rx='130'
            ry='104'
            fill={`url(#${hubGlowId})`}
          />

          {FEATURE_CARDS.map(({ key, ...card }) => (
            <FeatureCard
              key={key}
              cardFillId={cardFillId}
              shadowId={cardShadowId}
              {...card}
            />
          ))}

          <Hub
            gradientId={hubGradientId}
            shadowId={hubShadowId}
          />

          {STAT_BADGES.map(({ key, ...badge }) => (
            <StatBadge
              key={key}
              badgeFillId={badgeFillId}
              shadowId={badgeShadowId}
              {...badge}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}

function Connector({ from, to, outerFill, innerFill }) {
  return (
    <g>
      <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke='#C2D3EC'
        strokeWidth='2.2'
        strokeDasharray='4.5 6.5'
        strokeLinecap='round'
        opacity='0.9'
      />
      <circle
        cx={from.x}
        cy={from.y}
        r='4.8'
        fill={innerFill}
        stroke='white'
        strokeWidth='1.35'
      />
      <circle
        cx={to.x}
        cy={to.y}
        r='5.8'
        fill={outerFill}
        stroke='white'
        strokeWidth='1.7'
      />
    </g>
  );
}

function FeatureCard({ x, y, width, height, border, accent, title, subtitle, titleColor, subtitleColor, iconBackground, iconGlow, Icon, cardFillId, shadowId }) {
  const iconX = x + 15;
  const iconY = y + 14;
  const textX = x + 60;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx='20'
        fill={`url(#${cardFillId})`}
        stroke={border}
        strokeWidth='1.5'
        filter={`url(#${shadowId})`}
      />
      <path
        d={`M${x + 18} ${y + 15} H${x + width - 18}`}
        stroke='white'
        strokeWidth='1.15'
        strokeLinecap='round'
        opacity='0.78'
      />
      <circle
        cx={iconX + 19}
        cy={iconY + 19}
        r='19'
        fill={iconGlow}
        opacity='0.72'
      />
      <rect
        x={iconX}
        y={iconY}
        width='38'
        height='38'
        rx='12'
        fill={iconBackground}
      />
      <LucideFeatureIcon
        Icon={Icon}
        accent={accent}
        x={iconX}
        y={iconY}
      />
      <text
        x={textX}
        y={y + 37}
        fill={titleColor}
        fontSize='15'
        fontWeight='780'
        letterSpacing='0.08'
        fontFamily={FONT_FAMILY}
      >
        {title}
      </text>
      <text
        x={textX}
        y={y + 58}
        fill={subtitleColor}
        fontSize='11'
        fontWeight='640'
        letterSpacing='0.05'
        fontFamily={FONT_FAMILY}
        opacity='0.9'
      >
        {subtitle}
      </text>
      <circle
        cx={x + width - 15}
        cy={y + 15}
        r='2.2'
        fill={accent}
        opacity='0.8'
      />
    </g>
  );
}

function Hub({ gradientId, shadowId }) {
  const haloX = HUB.x - 16;
  const haloY = HUB.y - 14;
  const haloWidth = HUB.width + 32;
  const haloHeight = HUB.height + 30;

  const iconBoxSize = 54;
  const iconBoxX = HUB.x + 14;
  const iconBoxY = HUB.y + (HUB.height - iconBoxSize) / 2;

  const textX = HUB.x + 76;
  const titleY = HUB.y + 60;
  const subtitleY = HUB.y + 83;

  const dotsY = HUB.y + HUB.height - 20;
  const dotsStartX = HUB.x + 90;

  return (
    <g>
      <rect
        x={haloX}
        y={haloY}
        width={haloWidth}
        height={haloHeight}
        rx='38'
        fill='#60A5FA'
        opacity='0.14'
      />
      <rect
        x={HUB.x}
        y={HUB.y}
        width={HUB.width}
        height={HUB.height}
        rx={HUB.radius}
        fill={`url(#${gradientId})`}
        filter={`url(#${shadowId})`}
      />
      <rect
        x={HUB.x + 1}
        y={HUB.y + 1}
        width={HUB.width - 2}
        height={HUB.height - 2}
        rx={HUB.radius - 1}
        stroke='rgba(255,255,255,0.22)'
      />

      {/* ✅ Ganti kotak + huruf K manual dengan image logo */}
      <rect
        x={iconBoxX}
        y={iconBoxY}
        width={iconBoxSize}
        height={iconBoxSize}
        rx='16'
        fill='white'
      />
      <image
        href='/assets/klara-resize.png'
        x={iconBoxX}
        y={iconBoxY}
        width={50}
        height={56}
        preserveAspectRatio='xMidYMid meet'
      />

      <text
        x={textX}
        y={titleY}
        fill='white'
        fontSize='31'
        fontWeight='800'
        letterSpacing='0.16'
        fontFamily={FONT_FAMILY}
      >
        KLARA
      </text>
      <text
        x={textX}
        y={subtitleY}
        fill='rgba(255,255,255,0.76)'
        fontSize='10.4'
        fontWeight='580'
        fontFamily={FONT_FAMILY}
      >
        Platform Manajemen Bimbel
      </text>

      <circle
        cx={dotsStartX}
        cy={dotsY}
        r='4.1'
        fill='rgba(255,255,255,0.92)'
      />
      <circle
        cx={dotsStartX + 15}
        cy={dotsY}
        r='4.1'
        fill='rgba(255,255,255,0.52)'
      />
      <circle
        cx={dotsStartX + 30}
        cy={dotsY}
        r='4.1'
        fill='rgba(255,255,255,0.24)'
      />
    </g>
  );
}

function StatBadge({ x, y, width, height, accent, title, subtitle, titleColor, subtitleColor, textX, iconBackground, Icon, badgeFillId, shadowId }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx='15'
        fill={`url(#${badgeFillId})`}
        stroke='rgba(226,232,240,0.92)'
        strokeWidth='1.35'
        filter={`url(#${shadowId})`}
      />
      <path
        d={`M${x + 15} ${y + 14} H${x + width - 15}`}
        stroke='white'
        strokeWidth='1'
        strokeLinecap='round'
        opacity='0.82'
      />
      <LucideBadgeIcon
        Icon={Icon}
        accent={accent}
        background={iconBackground}
        x={x}
        y={y}
      />
      <text
        x={textX}
        y={y + 26}
        fill={titleColor}
        fontSize='18.5'
        fontWeight='800'
        letterSpacing='0.08'
        fontFamily={FONT_FAMILY}
      >
        {title}
      </text>
      <text
        x={x + 16}
        y={y + 46}
        fill={subtitleColor}
        fontSize='10.2'
        fontWeight='620'
        fontFamily={FONT_FAMILY}
        opacity='0.9'
      >
        {subtitle}
      </text>
    </g>
  );
}

function LucideFeatureIcon({ Icon, accent, x, y }) {
  return (
    <Icon
      x={x + 9}
      y={y + 9}
      width='20'
      height='20'
      color={accent}
      strokeWidth={1.9}
      aria-hidden='true'
      focusable='false'
    />
  );
}

function LucideBadgeIcon({ Icon, accent, background, x, y }) {
  return (
    <g>
      <circle
        cx={x + 21}
        cy={y + 20}
        r='12'
        fill={background}
      />
      <Icon
        x={x + 14}
        y={y + 13}
        width='14'
        height='14'
        color={accent}
        strokeWidth={1.9}
        aria-hidden='true'
        focusable='false'
      />
    </g>
  );
}
