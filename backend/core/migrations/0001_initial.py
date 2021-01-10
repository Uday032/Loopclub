# Generated by Django 3.1.5 on 2021-01-09 16:53

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Subscribers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('emails', models.EmailField(max_length=254)),
                ('date_added', models.DateField(default=datetime.date.today)),
            ],
        ),
    ]