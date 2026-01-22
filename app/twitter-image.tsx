import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'The Baking Social - Atlanta\'s Premier Baking Experience';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0D0D0D',
          backgroundImage: 'linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 50%, #0D0D0D 100%)',
          position: 'relative',
        }}
      >
        {/* Decorative corners */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            width: 80,
            height: 80,
            borderLeft: '2px solid rgba(212, 175, 55, 0.3)',
            borderTop: '2px solid rgba(212, 175, 55, 0.3)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 40,
            right: 40,
            width: 80,
            height: 80,
            borderRight: '2px solid rgba(212, 175, 55, 0.3)',
            borderTop: '2px solid rgba(212, 175, 55, 0.3)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: 40,
            width: 80,
            height: 80,
            borderLeft: '2px solid rgba(212, 175, 55, 0.3)',
            borderBottom: '2px solid rgba(212, 175, 55, 0.3)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            width: 80,
            height: 80,
            borderRight: '2px solid rgba(212, 175, 55, 0.3)',
            borderBottom: '2px solid rgba(212, 175, 55, 0.3)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 80px',
          }}
        >
          {/* Brand name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 600,
              color: '#FAF8F5',
              letterSpacing: '0.05em',
              marginBottom: 8,
              fontFamily: 'serif',
            }}
          >
            The Baking Social
          </div>

          {/* Decorative divider */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 24,
              marginTop: 16,
            }}
          >
            <div
              style={{
                width: 60,
                height: 1,
                backgroundColor: 'rgba(212, 175, 55, 0.5)',
              }}
            />
            <div
              style={{
                color: '#D4AF37',
                fontSize: 18,
              }}
            >
              ✦
            </div>
            <div
              style={{
                width: 60,
                height: 1,
                backgroundColor: 'rgba(212, 175, 55, 0.5)',
              }}
            />
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 36,
              fontWeight: 300,
              color: '#FAF8F5',
              marginBottom: 8,
              fontFamily: 'serif',
            }}
          >
            Where the art of baking
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#D4AF37',
              fontFamily: 'serif',
            }}
          >
            becomes an experience
          </div>

          {/* Location */}
          <div
            style={{
              marginTop: 40,
              fontSize: 18,
              fontWeight: 400,
              color: 'rgba(250, 248, 245, 0.6)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Atlanta, Georgia
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
