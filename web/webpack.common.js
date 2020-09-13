const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        register: path.join(__dirname, 'src/scripts/register.js'),
        login: path.join(__dirname, 'src/scripts/login.js'),
        reset: path.join(__dirname, 'src/scripts/reset.js'),
        home: path.join(__dirname, 'src/scripts/home.js'),
        schedule: path.join(__dirname, 'src/scripts/schedule.js'),
        settings: path.join(__dirname, 'src/scripts/settings.js'),
        about: path.join(__dirname, 'src/scripts/about.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: 'singletonStyleTag'
                        }
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.hbs$/i,
                use: [
                    {
                        loader: 'handlebars-loader',
                        options: {
                            partialDirs: path.join(__dirname, 'src/templates/partials')
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/templates/register.hbs'),
            filename: 'register.html',
            chunks: ['register'],
            title: 'Register | Web Schedules'            
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/templates/login.hbs'),
            filename: 'login.html',
            chunks: ['login'],
            title: 'Login | Web Schedules'            
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/templates/reset.hbs'),
            filename: 'reset.html',
            chunks: ['reset'],
            title: 'Reset Password | Web Schedules'            
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/templates/home.hbs'),
            filename: 'home.html',
            chunks: ['home'],
            title: 'Web Schedules'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/templates/schedule.hbs'),
            filename: 'schedule.html',
            chunks: ['schedule'],
            title: 'Web Schedules'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/templates/settings.hbs'),
            filename: 'settings.html',
            chunks: ['settings'],
            title: 'Settings | Web Schedules'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/templates/about.hbs'),
            filename: 'about.html',
            chunks: ['about'],
            title: 'About | Web Schedules'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, 'src/images/'),
                    to: path.resolve(__dirname, 'dist/images')
                }
            ]
        })
    ]
};