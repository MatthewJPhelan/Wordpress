import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';

import LandingPage from './LandingPage.vue';

storiesOf('Landing Page', module)
    .addDecorator(withKnobs)
    .add('Default', () => ({
        components: { LandingPage},
        props: {
            title: {
                default: text('Title', 'Matty J Phelan')
            },
            about: {
                default: text('About', 'PERSONAL TRAINING, ONLINE COACHING AND NUTRITIONAL EXPERTISE')
            },
            contact: {
                default: text('Contact', 'Idque Caesaris facere sese voluntate liceret habere. Lorem ipsum dolor sit amet, sed eiusmod tempor incidunt ut labore dolore lagna aliqua.')
            },
            imageUrl: {
                default: text('Image URL', 'https://picsum.photos/seed/picsum/640/536')
            }
        },
        template:
            `<div>
                <landing-page>
                    <template v-slot:title>
                        {{ title }}
                    </template>
                    <template v-slot:about>
                        {{ about }}
                    </template>
                    <template v-slot:contact>
                        {{ contact }}
                    </template>
                    <template v-slot:image>
                        <img :src="imageUrl" alt="Sample Image" />
                    </template>
                </article-hero>
            </div>`,
        data: () => ({
        })
    })
)